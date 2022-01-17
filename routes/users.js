const config = require('config');
require('dotenv').config();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const express = require('express');
const router = express.Router();

const User = require('../model/User');

// @route   POST    api/users
// @desc    Register user
// @access  Public
router.post(
	'/',
	[
		body('name', 'enter a valid name').not().isEmpty(),
		body('email', 'Please include a valid email').isEmail(),
		body(
			'password',
			'Please enter a password with 6 o more characters'
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
			});
		}
		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user) {
				return res.status(400).json({ msg: 'user already exists' });
			}

			user = new User({
				name,
				email,
				password,
			});

			const salt = await bcryptjs.genSalt(10);

			user.password = await bcryptjs.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				process.env.jwtSecret,
				{
					expiresIn: 360000,
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
