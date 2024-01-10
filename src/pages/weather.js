import usePopular from "../hooks/get-popular";
import WeatherWidget from "../components/weather-widget";

const Weather = () => {
    const {weatherData} = usePopular()
    
    return ( 
    <>
            {weatherData && 
                <div id="background" className='flex flex-col justify-center items-center pt-[25%] lg:pt-1 overflow-hidden'>
                  <div className="top-[250px] right-0 z-0 opacity-50" id="gradient"></div>             
                  
                  <WeatherWidget weatherData={weatherData} /> 
                  <div className="bottom-0 z-0" id="gradient"></div>             
                </div>
            }
    </> 
    );
}
 
export default Weather;