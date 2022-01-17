import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AlertContext from '../context/alertContext';
import AuthContext from '../context/authContext';

const Login = props => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuthenticated } = authContext;

	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/');
		}
		if (error === 'Invalid credentials') {
			setAlert(error, 'danger');
			clearErrors();
		}

		//eslint-diable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
	const onSubmit = e => {
		e.preventDefault();
		if (email === '' || password === '') {
			setAlert('Please fill all fields', 'danger');
		} else {
			login({
				email,
				password,
			});
		}
	};

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="card col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-10 offset-1  mt-5 bg-light">
					<form onSubmit={onSubmit}>
						<label htmlFor="email" className="form-label mt-4">
							Email Address
						</label>
						<input
							type="text"
							placeholder="your@mail.com"
							name="email"
							value={email}
							onChange={onChange}
							className="form-control"
						/>
						<label htmlFor="password" className="form-label mt-4">
							Password
						</label>
						<input
							type="password"
							placeholder="min 8 chars"
							name="password"
							value={password}
							onChange={onChange}
							className="form-control"
						/>
						<input
							type="submit"
							className="btn btn-warning mt-md-4 mt-5 mb-4 col-md-6 offset-md-3 col-12"
							value="Login"></input>
					</form>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 offset-lg-4 col-md-1 offset-md-4 col-10 offset-1 mt-3 mb-3">
					<Link to="/register" className="text-primary">
						<p>Register</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
