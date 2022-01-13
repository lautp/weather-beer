import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Login from './components/Login';
import WeatherState from './context/WeatherState';

function App() {
  

  return (
    <WeatherState>
      <div className="App">
        <Navbar /> 
        <Main />
        {/* <Login /> */}
      </div>
    </WeatherState>
  );
}

export default App;
