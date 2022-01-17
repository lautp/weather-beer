import React, { useReducer, useContext } from 'react';
import {
	GET_WEATHER,
	WEATHER_ERROR,
	GET_DAY,
	GET_TEMP,
	ORDER_BEER,
	ORDER_ERROR,
	ORDER_DELETE,
	GET_BEER,
	GET_QUANTITY,
	GET_BIRRA,
	GET_CANT,
	GET_ORDER,
	SET_CURRENT,
	CLEAR_CURRENT,
	GET_ID,
} from '../types';
import WeatherContext from './weatherContext';
import weatherReducer from './weatherReducer';
import AuthContext from './authContext';
import axios from 'axios';

const WeatherState = props => {
	const initialState = {
		weather: null,
		day: '',
		id: '',
		tmpt: '',
		beer: 'Pick beer',
		quantity: 'Pick quantity',
		birra: null,
		cant: null,
		error: null,
		orders: [],
		current: {},
	};

	const authContext = useContext(AuthContext);
	const { token } = authContext;

	const [state, dispatch] = useReducer(weatherReducer, initialState);

	//Get Weather
	const getWeather = async () => {
		try {
			const res = await axios.get('/api/weather');

			dispatch({ type: GET_WEATHER, payload: res.data });
		} catch (err) {
			dispatch({ type: WEATHER_ERROR, payload: err.response });
		}
	};

	//Get Day
	const getDay = day => {
		dispatch({ type: GET_DAY, payload: day });
	};

	//Get Temp
	const getTemp = temp => {
		dispatch({ type: GET_TEMP, payload: temp });
	};

	//Get Beer
	const getBeer = beer => {
		dispatch({ type: GET_BEER, payload: beer });
	};
	//Get Quantity
	const getQuantity = quant => {
		dispatch({ type: GET_QUANTITY, payload: quant });
	};

	//Make Order
	const makeOrder = async (beer, quantity, day) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post(
				'/api/order',
				{
					beer,
					quantity,
					day,
				},
				config
			);

			dispatch({ type: ORDER_BEER, payload: res.data });
			dispatch({ type: GET_BEER, payload: 'Pick beer' });
			dispatch({ type: GET_QUANTITY, payload: 'Pick quantity' });
			getOrders();
		} catch (err) {
			dispatch({ type: ORDER_ERROR, payload: err.response.msg });
		}
	};

	//Edit Order
	const editOrder = async (beer, quantity, day, id) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': `${token}`,
			},
		};

		if (beer !== 'Pick beer' && quantity !== 'Pick quantity') {
			try {
				const res = await axios.put(
					`/api/order/${id}`,
					{
						beer,
						quantity,
						day,
					},
					config
				);

				dispatch({ type: GET_BEER, payload: 'Pick beer' });
				dispatch({ type: GET_QUANTITY, payload: 'Pick quantity' });
				getOrders();
			} catch (err) {
				dispatch({ type: ORDER_ERROR, payload: err.response.msg });
			}
		}
	};

	//Delete Order
	const deleteOrder = async id => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': `${token}`,
			},
		};

		try {
			const res = await axios.delete(`/api/order/${id}`, config);

			dispatch({ type: GET_BEER, payload: 'Pick beer' });
			dispatch({ type: GET_QUANTITY, payload: 'Pick quantity' });
			getOrders();
		} catch (err) {
			dispatch({ type: ORDER_ERROR, payload: err.response.msg });
		}
	};

	//Get orders
	const getOrders = async () => {
		const res = await axios.get('/api/order');
		getOrder(res.data);
	};

	//Get Birra
	const getBirra = birra => {
		dispatch({ type: GET_BIRRA, payload: birra });
	};

	//Get Cant
	const getCant = cant => {
		dispatch({ type: GET_CANT, payload: cant });
	};

	//Get Order Array
	const getOrder = order => {
		dispatch({ type: GET_ORDER, payload: order });
	};

	//Set Current
	const setCurrent = order => {
		dispatch({ type: SET_CURRENT, payload: order });
	};

	//Clear Current
	const clearCurrent = order => {
		dispatch({ type: CLEAR_CURRENT });
	};

	//Get Id
	const getId = id => {
		dispatch({ type: GET_ID, payload: id });
	};

	return (
		<WeatherContext.Provider
			value={{
				weather: state.weather,
				day: state.day,
				tmpt: state.tmpt,
				beer: state.beer,
				quantity: state.quantity,
				birra: state.birra,
				cant: state.cant,
				orders: state.orders,
				current: state.current,
				getWeather,
				getDay,
				getTemp,
				getBeer,
				getQuantity,
				makeOrder,
				getBirra,
				getCant,
				getOrders,
				deleteOrder,
				setCurrent,
				clearCurrent,
				getId,
				editOrder,
			}}>
			{props.children}
		</WeatherContext.Provider>
	);
};

export default WeatherState;
