import React, {useState, useContext} from 'react';
import WeatherContext from '../context/weatherContext';
import { Modal, Button } from 'react-bootstrap';


const Weather = () => {
    const weekday = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const weatherContext = useContext(WeatherContext);

    const {weather, day, tmpt, getDay, getTemp, getDubbel, getNeipa, getGolden, getScotch} = weatherContext;

    let bselected = null;
    let qselected = null;
    let opt1 = null;
    let opt2 = null;

    const date = new Date();

    const [show, setShow] = useState(false);
    const [conf, setConf] = useState(false)
          
            const handleClose = () => setShow(false);
            const handleShow = e => {
                getDay(e.target.parentElement.parentElement.firstChild.innerHTML)
                getTemp(e.target.parentElement.parentElement.children[1].innerHTML)
                setShow(true)
                
            };
            
            const handleBeerSelect = e => {
                bselected = e.target.value;
                opt1 = e.target;
            }
            
            const handleQuantSelect = e => {
                qselected = e.target.value;
                opt2 = e.target;
            }

            const addOrder = () => {
                if(bselected !== null  && qselected !== null){
                    if(bselected !== 'Pick beer' && qselected !== 'Pick quantity'){
                        if(bselected ==='Dubbel'){
                            getDubbel(qselected)
                        }else if(bselected ==='NeIPA'){
                            getNeipa(qselected)
                        }else if(bselected ==='Golden'){
                            getGolden(qselected)
                        }else if(bselected ==='Scotch'){
                            getScotch(qselected)
                        }
                    }
                }
                opt1.selectedIndex = 0;
                opt2.selectedIndex = 0;

                setConf(true);

                setTimeout(()=>{
                    setConf(false);
                }, 1000)



            }

    
    return (
        <>
            <div className='container mt-5'>
                <div className="row">
                    <div className='d-flex justify-content-center h1'>Temps!</div>
                    <div className="card mt-5 col-10 offset-1 col-md-6 offset-md-3 pt-3">
                    {weekday.map((day, idx)=>{
                        if(idx < 7){
                            return (
                                <div key={idx} className="row" >
                                    <div className="col-6 col-sm-4 col-md-4 h6">{weekday[date.getDay()+idx]}</div>
                                    <div className="col-1 col-sm-2 h6 d-flex justify-content-end" id={idx}>{weather!==null?`${Math.round(weather.daily[idx].temp.day)} C°`:`22`}</div><div className='col-3 col-sm-2 h6'>C°</div>
                                    <div className="col"><button className='btn btn-sm btn-outline-warning col-md-12 col-12 mb-3 mb-sm-3 mb-md-3' onClick={handleShow}>Order</button></div>
                                </div>
                            )
                        }else{
                            return null;
                        }
                    })
                    }
                    </div>
                </div>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{day} order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>The temp is/will be {tmpt} C°</p>
                    <p>We recommend ordering {tmpt>32&&'Golden and NeIPA'}{tmpt>25&&tmpt<32&&'Scotch and NeIPA'}{tmpt<25&&'Dubbel, Scotch and NeIPA'}</p>
                    <p className='h3'>Beer</p>
                    <select className="form-select" onChange={handleBeerSelect} >
                        <option defaultValue="0">Pick beer</option>
                        <option value="Dubbel">Dubbel</option>
                        <option value="NeIPA">NeIPA</option>
                        <option value="Golden">Golden</option>
                        <option value="Scotch">Scotch</option>
                    </select>
                    <p className='h3 mt-3'>Tank quantity</p>
                    <select className="form-select" onChange={handleQuantSelect}>
                        <option defaultValue="0">Pick quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={addOrder}>Add to order</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={conf} size='sm'>
                <Modal.Body className='bg-success text-white rounded'>Order loaded!</Modal.Body>
            </Modal>
                
        </>
    )
}

export default Weather;




