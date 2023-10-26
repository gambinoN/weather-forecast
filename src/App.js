import "./index.css"
import CurrentWeather from "./CurrentWeather";
import { useState } from "react";
import WeatherForecast from "./WeatherForecast";

function App() {

  const apiKey = '546c88c1b69e4ab7a4a101316230809';
  
  const [inputValue, setInputValue] = useState('Sarajevo');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue('')
  }

  console.log(inputValue)

  return (
    <div>
      <form className="absolute z-10 mt-52 mb-20 flex justify-center w-full" onSubmit={handleSubmit}>
      <label>
        <input
          className="w-72 px-5 py-3 rounded-xl"
          type="text"
          placeholder="Enter your city:"
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
      <button className="bg-blue-600 py-3 px-5 rounded-2xl text-white font-bold font-mono" type="submit">Delete</button>
    </form>
      <CurrentWeather apiKey={apiKey} locationPlace={inputValue}/>
      <WeatherForecast apiKey={apiKey} locare={inputValue} />
    </div>
  );
}
export default App;
