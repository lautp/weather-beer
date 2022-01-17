import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../../context/authContext';

const PrivateOutlet = () => {
	const authContext = useContext(AuthContext);

	const { isAuthenticated } = authContext;

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlet;
