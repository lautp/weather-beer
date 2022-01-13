import React, {useEffect, useContext} from 'react';
import WeatherContext from '../context/weatherContext';
import Weather from './Weather';
import OrderList from './OrderList';


const Main = () => {
    
    const weatherContext = useContext(WeatherContext);

    const {getWeather} = weatherContext;

    
    useEffect(()=>{
        // getWeather();
        //eslint-disable-next-line
    },[]) 
    

    return (
        <div>
            <Weather />
            <OrderList />
        </div>
    )
}

export default Main;
