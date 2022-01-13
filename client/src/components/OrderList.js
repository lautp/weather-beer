import React, {useState, useContext} from 'react';
import WeatherContext from '../context/weatherContext';


const OrderList = () => {

    const weatherContext = useContext(WeatherContext);

    const {weather, day, scotch, neipa, golden, dubbel} = weatherContext;



    return (
        <div className='container mt-3 mb-3 card col-md-5 bg-light'>
            <div className="row">
                <div className="">
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Day</th>
                    <th scope="col">Gldn</th>
                    <th scope="col">Scth</th>
                    <th scope="col">nIPA</th>
                    <th scope="col">Dbbl</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Mon</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th scope="row">Tue</th>
                    </tr>
                    <tr>
                        <th scope="row">Wed</th>
                    </tr>
                    <tr>
                        <th scope="row">Thu</th>
                    </tr>
                    <tr>
                        <th scope="row">Fri</th>
                    </tr>
                    <tr>
                        <th scope="row">Sat</th>
                    </tr>
                    <tr>
                        <th scope="row">Sun</th>
                    </tr>
                    
                </tbody>
            </table>
                </div>
            
            </div>
               
        </div>
    )
}

export default OrderList;
