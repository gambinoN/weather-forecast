import { useEffect, useState } from "react";

const useWeather = ({type, debouncedLocationName}) => {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    const apiKey = '546c88c1b69e4ab7a4a101316230809';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/${type}.json?key=${apiKey}&q=${debouncedLocationName}&days=3`);
                  
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const result = await response.json();
            setWeatherData(result);
            } catch (error) {
                setError(error);
                console.log('Error:', error)
            }
        };
          
        fetchData();
    }, [debouncedLocationName])

    return {weatherData};
}
 
export default useWeather;
