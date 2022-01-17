import React, { useContext } from 'react';
import AlertContext from '../context/alertContext';

const Alerts = () => {
	const alertContext = useContext(AlertContext);

	const { alert } = alertContext;

	return (
		alertContext.alerts.length > 0 &&
		alertContext.alerts.map(alert => (
			<div key={alert.id} className={`alert alert-${alert.type}`}>
				<i className="fas fa-info-circle" /> {alert.msg}
			</div>
		))
	);
};

export default Alerts;
