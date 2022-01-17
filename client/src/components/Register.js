import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AlertContext from '../context/alertContext';
import AuthContext from '../context/authContext';

const Register = props => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;

	const { register, error, clearErrors, isAuthenticated } = authContext;

	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/');
		}
		if (error === 'user already exists') {
			setAlert(error, 'danger');
			clearErrors();
		}

		//eslint-diable-next-line
	}, [error, isAuthenticated, props.history]);

	const { name, email, password, password2 } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
	const onSubmit = e => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setAlert('Please enter all fields', 'danger');
		} else if (password !== password2) {
			setAlert('Password do not match', 'danger');
		} else {
			register({
				name,
				email,
				password,
			});
		}
	};

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="card col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-10 offset-1  mt-md-5 mt-2 bg-light">
					<form onSubmit={onSubmit}>
						<label htmlFor="name" className="form-label mt-4">
							Name
						</label>
						<input
							type="text"
							placeholder="name"
							name="name"
							value={name}
							onChange={onChange}
							className="form-control"
						/>
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
							placeholder="min 6 chars"
							name="password"
							value={password}
							onChange={onChange}
							className="form-control"
						/>
						<label htmlFor="confirmpassword" className="form-label mt-4">
							Confirm password
						</label>
						<input
							type="password"
							placeholder="Confirm password"
							name="password2"
							value={password2}
							onChange={onChange}
							className="form-control"
						/>
						<input
							type="submit"
							className="btn btn-warning mt-md-4 mt-5 mb-4 col-md-6 offset-md-3 col-12"
							value="Register"></input>
					</form>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 offset-lg-4 col-md-1 offset-md-3 col-10 offset-1 mt-3 mb-3">
					<Link to="/login" className="text-primary">
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
