import { useState, useEffect } from "react"
import axios from "axios"

const WeatherForecast = ({apiKey, locare}) => {
    const [weatherForecast, setWeatherForecast] = useState([])

    useEffect(() => {
        axios
            .get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locare}&days=4`)
            .then((res) => {
                const threeDayData = res.data.forecast.forecastday.slice(1, 5);
                setWeatherForecast(threeDayData);
            })
            .catch((err) => {
                console.log('Fetch was not successful ', err)
            })
            
    }, [apiKey, locare]) 

    const options = {weekday: 'long'}

    return ( 
        <div className='absolute z-20 bottom-20 flex w-full justify-around items-center text-white font-mono font-semibold'>
                {weatherForecast.map((day, index) => {
                    const dateObject = new Date(day.date)
                    return (
                        <li className="list-none flex items-center flex-col justify-center bg-blue-900 p-6 rounded-lg" key={index}>
                        <h3>{dateObject.toLocaleDateString('en-US', options)}</h3>
                        <img alt="" src={day.day.condition.icon}></img>
                        <p>Temperature {day.day.avgtemp_c}°C</p>
                        <p>{day.day.condition.text}</p>
                    </li>
                    )
                })}
        </div>
     );
}
 
export default WeatherForecast;