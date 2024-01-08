import { useState, useEffect } from "react";
import usePopular from "../hooks/get-popular";
import WeatherWidget from "../components/weather-widget";

const Weather = ({onLocationChange, handleChangeLocation}) => {
    const {weatherData} = usePopular()
    const [locationName, setLocationName] = useState('');
    const [debouncedLocationName, setDebouncedLocationName] = useState('Sarajevo');  


    const handleInputChange = (event) => {
        setLocationName(event.target.value);
    }

    useEffect(() => {
        const delayTimer = setTimeout(() => {
          setDebouncedLocationName(locationName);
        }, 1000); 
    
        return () => clearTimeout(delayTimer);
    }, [locationName]);
    
    useEffect(() => {
        onLocationChange(debouncedLocationName);
    }, [debouncedLocationName, onLocationChange]);
    
    return ( 
    <>
            {weatherData && 
                <div id="background" className='flex flex-col justify-center items-center h-screen overflow-hidden'>
                  <div className="top-0 right-0 z-0 opacity-50" id="gradient"></div>             
                  <form className="w-[90%] text-center flex justify-evenly items-center mb-2 md:mt-[10%] mt-[30%]">
                        <input
                        className="w-full h-10 px-4 rounded-md mx-auto text-graybasee font-sans font-normal"
                        id="linear"
                        type="text"
                        placeholder="Search for a city"
                        value={locationName}
                        onChange={handleInputChange}
                        />
                    </form>
                  <WeatherWidget weatherData={weatherData} /> 
                  <div className="bottom-0 z-0" id="gradient"></div>             
                </div>
            }
    </> 
    );
}
 
export default Weather;