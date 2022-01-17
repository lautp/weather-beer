const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const axios = require('axios');

// @route   GET    api/weather
// @desc    Get weather
// @access  Private
router.get('/', async (req, res) => {
	try {
		const forecast = await axios.get(
			'https://api.openweathermap.org/data/2.5/onecall?lat=-34.603722&lon=-58.381592&units=metric&exclude=minutely,hourly&appid=09ec42e06160e90f15ac94e022c69554'
		);
		const temps = forecast.data.daily;

		// const forecast = await axios.get(
		// 	'https://api.weatherbit.io/v2.0/forecast/daily?days=8&lat=-34.603722&lon=-58.381592&key=23635e8570ec473c89a34e55e43887db'
		// );
		// const temps = forecast.data;

		res.status(200).json(temps);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error weather');
	}
});

module.exports = router;
