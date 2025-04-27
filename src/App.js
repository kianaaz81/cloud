import './App.css';
import WeatherApp from './components/weatherApp';
import bgimg from "./assests/background.jpg"
function App() {
  return (
    <div  className=" min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${bgimg})` }}>
    <WeatherApp/>
    </div>
  );
}

export default App;
