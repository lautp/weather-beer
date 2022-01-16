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
                <i className="fas fa-sign-out-alt text-warning"></i><span className="text-warning"> Logout</span>
            </a>
        </>
    )

    return (
        <>
            <nav className='navbar navbar-nav bg-warning pb-0'>
                <a href="" className='navbar-brand h1 ms-4'><h1>Weather-Beer</h1></a>
            </nav>
            <div className="col-4 offset-1" >{isAuthenticated&&authLinks}</div>
        </>
    )
}

export default Navbar;