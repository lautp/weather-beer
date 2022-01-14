import React, {useReducer} from 'react';
import { GET_WEATHER, GET_DAY, GET_TEMP, ORDER_BEER, ORDER_ERROR,  GET_BEER, GET_QUANTITY, GET_BIRRA, GET_CANT } from '../types';
import WeatherContext from './weatherContext';
import weatherReducer from './weatherReducer';
import axios from 'axios';

const WeatherState = props => {
    
    const initialState = {
        weather:null,
        day:'',
        id:'',
        tmpt:'',
        beer:'Pick beer',
        quantity:'Pick quantity',
        birra:null,
        cant:null,
        error:null
    }
    
    const [state, dispatch] = useReducer(weatherReducer, initialState)
    
    //Get Weather
    const getWeather = async () => {
        const res = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=-34.603722&lon=-58.381592&units=metric&exclude=minutely,hourly&appid=09ec42e06160e90f15ac94e022c69554')
        dispatch({type:GET_WEATHER, payload:res.data})
    }

    //Get Day
    const getDay = day => {
        dispatch({type:GET_DAY, payload:day})
    }

    //Get Temp
    const getTemp = temp => {
        dispatch({type:GET_TEMP, payload:temp})
    }

    //Get Beer
    const getBeer = beer => {
        dispatch({type:GET_BEER, payload:beer})
    }
    //Get Quantity
    const getQuantity = quant => {
        dispatch({type:GET_QUANTITY, payload:quant})
    }

    //Make Order
    const makeOrder = async (beer, quantity, day) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/order', {
                beer,
                quantity,
                day
            }, config)

            dispatch({ type:ORDER_BEER, payload:res.data })
            dispatch({type:GET_BEER, payload:'Pick beer'})
            dispatch({type:GET_QUANTITY, payload:'Pick quantity'})
        } catch (err) {
            dispatch({type:ORDER_ERROR, payload:err.response.msg})
        }
    }

    //Get Birra
    const getBirra = birra => {
        dispatch({type:GET_BIRRA, payload:birra})
    }

    //Get Cant
    const getCant = cant => {
        dispatch({type:GET_CANT, payload:cant})
    }
    
    return (
        <WeatherContext.Provider
            value={{
                weather:state.weather,
                day:state.day,
                tmpt:state.tmpt,
                beer:state.beer,
                quantity:state.quantity,
                birra:state.birra,
                cant:state.cant,
                getWeather,
                getDay,
                getTemp,
                getBeer,
                getQuantity,
                makeOrder,
                getBirra,
                getCant
                

            }}
        >
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherState;



// //Get Dubbel
// const getDubbel = q => {
//     dispatch({type:GET_DUBBEL, payload:q})
// }

// //Get NeIPA
// const getNeipa = q => {
//     dispatch({type:GET_NEIPA, payload:q})    
// }

// //Get Golden
// const getGolden = q => {
//     dispatch({type:GET_GOLDEN, payload:q})    
// }

// //Get Scotch
// const getScotch = q => {
//     dispatch({type:GET_SCOTCH, payload:q})    
// }


// getDubbel,
//                 getNeipa,
//                 getGolden,
//                 getScotch
