import { useState, useEffect } from "react";

const usePopular = () => {
    const [weatherData, setWeatherData] = useState([])
    const [error, setError] = useState(null)
    const apiKey = '546c88c1b69e4ab7a4a101316230809';
    const cities = ['London', 'New York', 'Hong Kong']

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = cities.map(async (city) => {
                    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                    }
                    return response.json();
                });

                const results = await Promise.all(promises);
                setWeatherData(results);
            } catch (error) {
                setError(error);
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);

    return {weatherData};

}
 
export default usePopular;