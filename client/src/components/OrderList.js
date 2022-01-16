import React, { useEffect, useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import WeatherContext from '../context/weatherContext';

const OrderList = () => {
	const weekday = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const date = new Date();

	const weatherContext = useContext(WeatherContext);

	const {
		orders,
		getOrders,
		deleteOrder,
		editOrder,
		getBeer,
		getBirra,
		getQuantity,
		getCant,
		getId,
		setCurrent,
		clearCurrent,
		current,
		beer,
		quantity,
	} = weatherContext;

	const [show, setShow] = useState(false);
	const [conf, setConf] = useState(false);
	const [dele, setDele] = useState(false);

	const handleClose = () => {
		setShow(false);
		clearCurrent();
	};
	const handleShow = e => {
		setShow(true);
	};

	const handleBeerSelect = e => {
		getBeer(e.target.value);
		getBirra(e.target);
	};

	const handleQuantSelect = e => {
		getQuantity(e.target.value);
		getCant(e.target);
	};

	useEffect(() => {
		getOrders();
	}, []);

	const onEdit = e => {
		setCurrent({
			cbeer: e.target.name,
			cquantity: parseInt(e.target.innerText),
			cday: e.target.title,
			cid: e.target.id,
		});
		getId(e.target.id);
		handleShow(e);
	};

	const edit = () => {
		editOrder(beer, quantity, current.cday, current.cid);

		setConf(true);

		setTimeout(() => {
			setConf(false);
		}, 2000);

		handleClose();
	};

	const onDelete = () => {
		deleteOrder(current.cid);
		handleClose();

		setDele(true);

		setTimeout(() => {
			setDele(false);
		}, 2000);
	};

	return (
		<>
			<div className="container mt-3 mb-3 card col-md-5 bg-light">
				<div className="row">
					<div className="">
						<table className="table table-striped">
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
								{weekday.map((day, idx) => {
									if (idx < 7) {
										return (
											<tr key={idx}>
												<th scope="row">
													{weekday[date.getDay() + idx].slice(0, 3)}
												</th>
												<td>
													{orders.map(order => {
														if (weekday[date.getDay() + idx] === order.day) {
															if (order.beer === 'Golden') {
																return (
																	<a
																		href="#!"
																		key={order._id}
																		id={order._id}
																		onClick={onEdit}
																		style={{ color: 'black' }}
																		value={order.quantity}
																		name={order.beer}
																		title={order.day}>
																		{order.quantity}
																		<i
																			className="fas fa-info-circle"
																			style={{ color: 'blue' }}></i>
																	</a>
																);
															}
														}
													})}
												</td>
												<td>
													{orders.map(order => {
														if (weekday[date.getDay() + idx] === order.day) {
															if (order.beer === 'Scotch') {
																return (
																	<a
																		href="#!"
																		key={order._id}
																		id={order._id}
																		onClick={onEdit}
																		style={{ color: 'black' }}
																		value={order.quantity}
																		name={order.beer}
																		title={order.day}>
																		{order.quantity}{' '}
																		<i
																			className="fas fa-info-circle"
																			style={{ color: 'blue' }}></i>
																	</a>
																);
															}
														}
													})}
												</td>
												<td>
													{orders.map(order => {
														if (weekday[date.getDay() + idx] === order.day) {
															if (order.beer === 'NeIPA') {
																return (
																	<a
																		href="#!"
																		key={order._id}
																		id={order._id}
																		onClick={onEdit}
																		style={{ color: 'black' }}
																		value={order.quantity}
																		name={order.beer}
																		title={order.day}>
																		{order.quantity}{' '}
																		<i
																			className="fas fa-info-circle"
																			style={{ color: 'blue' }}></i>
																	</a>
																);
															}
														}
													})}
												</td>
												<td>
													{orders.map(order => {
														if (weekday[date.getDay() + idx] === order.day) {
															if (order.beer === 'Dubbel') {
																return (
																	<a
																		href="#!"
																		key={order._id}
																		id={order._id}
																		onClick={onEdit}
																		style={{ color: 'black' }}
																		value={order.quantity}
																		name={order.beer}
																		title={order.day}>
																		{order.quantity}{' '}
																		<i
																			className="fas fa-info-circle"
																			style={{ color: 'blue' }}></i>
																	</a>
																);
															}
														}
													})}
												</td>
											</tr>
										);
									} else {
										return null;
									}
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				centered>
				<Modal.Header closeButton>
					<Modal.Title>Edit order</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p className="h6">Day: {current.cday}</p>
					<p className="h6">Beer: {current.cbeer}</p>
					<p className="h6">Quantity: {current.cquantity}</p>
					<p className="h3 mt-3">Change Beer</p>
					<select className="form-select" onChange={handleBeerSelect}>
						<option defaultValue="0">Pick beer</option>
						<option value="Dubbel">Dubbel</option>
						<option value="NeIPA">NeIPA</option>
						<option value="Golden">Golden</option>
						<option value="Scotch">Scotch</option>
					</select>
					<p className="h3 mt-3">Change quantity</p>
					<select className="form-select" onChange={handleQuantSelect}>
						<option defaultValue="0">Pick quantity</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="warning" onClick={edit}>
						Edit order
					</Button>
					<Button variant="danger" onClick={onDelete}>
						Delete order
					</Button>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={conf} size="sm">
				<Modal.Body className="bg-success text-white rounded">
					Order Edited!
				</Modal.Body>
			</Modal>

			<Modal show={dele} size="sm">
				<Modal.Body className="bg-success text-white rounded">
					Order Deleted!
				</Modal.Body>
			</Modal>
		</>
	);
};

export default OrderList;
