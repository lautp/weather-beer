import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
	Outlet,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Register from './components/Register';
import Login from './components/Login';
import Alerts from './components/Alerts';
import PrivateOutlet from './components/routing/PrivateOutlet';
import WeatherState from './context/WeatherState';
import AuthState from './context/AuthState';
import AlertState from './context/AlertState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<WeatherState>
				<AlertState>
					<Router>
						<div className="App">
							<Navbar />
							<Alerts />
							<Routes>
								<Route exact path="/" element={<PrivateOutlet />}>
									<Route exact path="/" element={<Main />} />
								</Route>
								<Route exact path="/login" element={<Login />} />
								<Route exact path="/register" element={<Register />} />
							</Routes>
						</div>
					</Router>
				</AlertState>
			</WeatherState>
		</AuthState>
	);
};

export default App;
