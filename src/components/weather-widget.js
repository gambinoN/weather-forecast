import { useState, useEffect } from "react";

const WeatherWidget = ({weatherData}) => {
    const [iconImages, setIconImages] = useState([]);

    useEffect(() => {
        // Function to map weather condition codes to icon images 
        const setIcons = () => {
          if (weatherData && weatherData.length > 0) {
            const icons = weatherData.map((city) => {
                const weatherCode = city.current.condition.code;
                const isDay = city.current.is_day === 1

                let iconImage = null
                // Define icon images or colors based on weather condition codes
                switch (weatherCode) {
                  case 1000: // Clear
                  iconImage = isDay ? '../sunny_icon.png' : '../moon_icon.png';
                    break;
                  case 1006:
                  case 1003:
                  case 1009:
                  case 1030:
                  case 1135:  
                  case 1147:
                    iconImage = '../cloudy_icon.png';
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
                    iconImage = '../rainy_icon.png';
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
                    iconImage = '../snowy_icon.png';
                    break;
                  default:
                    iconImage = '../moon_icon.png';
                    break;
                }
                return iconImage
            })
            setIconImages(icons);
          }
        };
    
        setIcons()
      }, [weatherData])

    return ( 
        <>
            <div className="bottom-0 md:mt-20 mt-6">
                    {weatherData.map((city, index) => {
                    const currentWeather = city.current    
                    return (
                        <div key={index} className='flex aspect-auto justify-center items-center mb-20'>
                            <img src="../Rectangle 1.png" alt="" className="absolute" />
                            <div className="flex flex-col z-50 mr-10 mt-[10px]">
                                <p className='font-sans font-bold text-white text-6xl mt-3'>{currentWeather.temp_c}°</p>
                                <div className='flex justify-around w-full'>
                                    <p className='font-sans font-normal text-[#aaaaaa] text-md'>{currentWeather.wind_kph}km/h</p>
                                    <p className='font-sans font-normal text-[#aaaaaa] text-md ml-2'>{currentWeather.wind_dir}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className='text-white font-sans font-medium text-xl'>{city.location.name}</p>
                                </div>
                            </div>
                            <img className="w-32 h-32 z-50" src={iconImages[index]} alt="Weather icon" />
                        </div>
                    )})}
            </div>  
        </>
     );
}
 
export default WeatherWidget;