import React, { useEffect, useContext } from 'react';
import WeatherContext from '../context/weatherContext';
import Weather from './Weather';
import OrderList from './OrderList';
import AuthContext from '../context/authContext';

const Main = () => {
	const authContext = useContext(AuthContext);

	const weatherContext = useContext(WeatherContext);

	const { getWeather } = weatherContext;

	const { loadUser } = authContext;

	useEffect(() => {
		getWeather();
		loadUser();
		console.log('logged');

		//eslint-disable-next-line
	}, []);

	return (
		<div>
			<Weather />
			<OrderList />
		</div>
	);
};

export default Main;
