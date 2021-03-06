const config = require('config');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	//Get token from header
	const token = req.header('x-auth-token');

	//Check if not token

	if (!token) {
		return res.status(401).json({ msg: 'No Token, auth denied' });
	}

	try {
		const decoded = jwt.verify(token, process.env.jwtSecret);

		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({
			msg: 'Token is not valid',
		});
	}
};
