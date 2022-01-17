const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

const User = require('../model/User');
const Order = require('../model/Order');

// @route   GET    api/order
// @desc    Get all orders
// @access  Private
router.get('/', auth, (req, res) => {
	try {
		setTimeout(async () => {
			const order = await Order.find({ user: req.user.id });
			res.json(order);
		}, 2000);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route   POST    api/order
// @desc    Add new order
// @access  Private
router.post(
	'/',
	[
		auth,
		[
			body('beer', 'Select a beer').not().isEmpty(),
			body('quantity', 'Pick amount').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
			});
		}
		const { beer, quantity, day } = req.body;

		try {
			const newOrder = new Order({
				user: req.user.id,
				day,
				beer,
				quantity,
			});

			const order = await newOrder.save();

			res.json(order);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('server error');
		}
	}
);

// @route   PUT    api/order/:id
// @desc    Update order
// @access  Private
router.put('/:id', auth, async (req, res) => {
	const { beer, quantity, day } = req.body;

	//Build order object

	const orderFields = {};
	if (beer) orderFields.beer = beer;
	if (day) orderFields.day = day;
	if (quantity) orderFields.quantity = quantity;

	try {
		let order = await Order.findById(req.params.id);

		if (!order) return res.status(404).json({ msg: 'Order not found' });

		//Make sure user owns order
		if (order.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		order = await Order.findByIdAndUpdate(
			req.params.id,
			{ $set: orderFields },
			{ new: true }
		);

		res.json(order);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('server error');
	}
});

// @route   DELETE    api/order/:id
// @desc    Delete order
// @access  Private
router.delete('/:id', auth, async (req, res) => {
	try {
		let order = await Order.findById(req.params.id);

		if (!order) return res.status(404).json({ msg: 'Order not found' });

		//Make sure user owns order
		if (order.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		await Order.findByIdAndRemove(req.params.id);

		res.json({
			msg: 'Order removed',
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('server error');
	}
});

module.exports = router;
