import React, {useReducer} from 'react';
import { GET_WEATHER, GET_DAY, GET_ID, GET_TEMP, GET_DUBBEL, GET_NEIPA, GET_GOLDEN, GET_SCOTCH } from '../types';
import WeatherContext from './weatherContext';
import weatherReducer from './weatherReducer';
import axios from 'axios';

const WeatherState = props => {
    
    const initialState = {
        weather:null,
        day:'',
        id:'',
        tmpt:'',
        golden:'',
        scotch:'',
        neipa:'',
        dubbel:'',
        beer:'',
        quantity:''
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
    
    //Get Dubbel
    const getDubbel = q => {
        dispatch({type:GET_DUBBEL, payload:q})
    }

    //Get NeIPA
    const getNeipa = q => {
        dispatch({type:GET_NEIPA, payload:q})    
    }

    //Get Golden
    const getGolden = q => {
        dispatch({type:GET_GOLDEN, payload:q})    
    }

    //Get Scotch
    const getScotch = q => {
        dispatch({type:GET_SCOTCH, payload:q})    
    }
    
    return (
        <WeatherContext.Provider
            value={{
                weather:state.weather,
                day:state.day,
                tmpt:state.tmpt,
                golden:state.golden,
                scotch:state.scotch,
                neipa:state.neipa,
                dubbel:state.dubbel,
                beer:state.beer,
                quantity:state.quantity,
                getWeather,
                getDay,
                getTemp,
                getDubbel,
                getNeipa,
                getGolden,
                getScotch

            }}
        >
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherState;
