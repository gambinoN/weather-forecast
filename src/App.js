import CurrentWeather from "./components/CurrentWeather";
import { useState, useEffect } from "react";
import useWeather from "./hooks/get-weather";
import WeatherForecast from "./components/weather-forecast";
import Weather from "./pages/weather";


function App() {
  let type = 'forecast'
  const [backgroundImage, setBackgroundImage] = useState(null)
  const [debouncedLocation, setDebouncedLocation] = useState('Sarajevo');
  const {weatherData} = useWeather({type, debouncedLocation})
  const [changeLocationBtn, setChangeLocationBtn] = useState(false)

  const handleLocationChange = (location) => {
      setDebouncedLocation(location);
  }

  console.log(debouncedLocation)

  useEffect(() => {
    // Function to map weather condition codes to background images or colors
    const setBackground = () => {
      if (weatherData && weatherData.current && weatherData.current.condition) {
        const weatherCode = weatherData.current.condition.code;
        const isDay = weatherData.current.is_day === 1
        // Define background images or colors based on weather condition codes
        switch (weatherCode) {
          case 1000: // Clear
            setBackgroundImage(isDay ? '../sunny.jpg' : '../night-background.png');
            break;
          case 1006:
          case 1003:
          case 1009:
          case 1030:
          case 1135:  
          case 1147:
            setBackgroundImage('../cloudy.jpg');
            break;
          case 1063: // Rain
          case 1189: 
          case 1087:
          case 1083:
          case 1153: 
          case 1168:
          case 1150:
          case 1186:
          case 1192:
          case 1195:
          case 1198:
          case 1183:
          case 1201:
            setBackgroundImage('../rainy.jpg');
            break;
          case 1066: // Snow
          case 1069:
          case 1072:
          case 1114: 
          case 1117:
          case 1204:
          case 1207: 
          case 1210:
          case 1213:
          case 1216:
          case 1219: 
          case 1222:
          case 1225:
          case 1237: 
          case 1249:
          case 1252:
          case 1255:
          case 1258: 
          case 1261:
          case 1264:
          case 1279:
          case 1282:
            setBackgroundImage('../snowy.jpg');
            break;
          default:
            setBackgroundImage('../night-background.png');
            break;
        }
      }
    };

    setBackground();
  }, [weatherData])
  
  const handleChangeLocation = () => {
    setChangeLocationBtn(prevChangeLocationBtn => !prevChangeLocationBtn)
  }

  const handleReturn = () => {
      setChangeLocationBtn(false)
  }

  return (
    <>
    {!changeLocationBtn ? (
    <><div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col h-full items-center w-full"
    >
      <button id="linear" className="px-8 py-4 mt-4 rounded-lg text-lg font-sans text-white " onClick={handleChangeLocation}>
          Change Location
      </button> 
      <CurrentWeather weatherData={weatherData} />
      <WeatherForecast weatherData={weatherData} />
      
    </div>
      </>)
       : (
        <>
            <div className="absolute">
                <button className="text-graybasee text-xl mt-[15%] ml-6" onClick={handleReturn}>Return to Weather</button>
            </div>
            <Weather onLocationChange={handleLocationChange}/>

        </>
      )}
  </>
  )
}
export default App;
