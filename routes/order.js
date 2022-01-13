const express =  require('express');
const router = express.Router();

// @route   GET    api/order
// @desc    Get all orders
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all orders')
});

// @route   POST    api/order
// @desc    Add new order
// @access  Private
router.post('/', (req, res) => {
    res.send('Add new order')
});

// @route   PUT    api/order/:id
// @desc    Update order
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update order')
});

// @route   DELETE    api/order/.id
// @desc    Delete order
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete order')
});

module.exports = router;