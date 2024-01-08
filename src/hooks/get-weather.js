import { useEffect, useState } from "react";

const useWeather = ({type, debouncedLocation}) => {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    const apiKey = '546c88c1b69e4ab7a4a101316230809';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/${type}.json?key=${apiKey}&q=${debouncedLocation}&days=5`);
                  
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
    }, [debouncedLocation])

    return {weatherData};
}
 
export default useWeather;
