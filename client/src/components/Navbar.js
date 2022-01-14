import React,{useContext, Fragment} from 'react';
import AuthContext from '../context/authContext'
import './Navbar.css'

const Navbar = () => {
    const authContext = useContext(AuthContext);

    const {isAuthenticated, user, logout} = authContext

    const onLogout = () => {
        logout();
    }

    const authLinks = (
        <>
            
            <a href="#!" onClick={onLogout}>
                <i className="fas fa-sign-out-alt "></i><span className="hide-sm"> Logout</span>
            </a>
            
        </>
    )

    return (
        <>
            <nav className='navbar navbar-nav bg-warning pb-0'>
                <div className="container">
                    <div className="row col-12">
                        <div className="col-4 offset-4 logo"><a href="#" className='navbar-brand'><h1 className='col-md-3 offset-md-3'>WeatherBeer</h1></a></div>
                        <div className="col-1 offset-11">{isAuthenticated&&authLinks}</div>
                    </div>
                </div>
                
                
                
                
            </nav>
            
        </>
    )
}

export default Navbar;
