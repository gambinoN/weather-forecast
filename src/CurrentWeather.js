import {useState, useEffect} from 'react'
import axios from 'axios'

function CurrentWeather({apiKey, locationPlace}) {
    
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        axios
            .get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationPlace}`)
            .then((res) => {
                setWeatherData(res.data)
            })
            .catch((err) => {
                console.log('Fetch was not successful ', err)
            })
            
    }, [apiKey, locationPlace]) 


    return(
        <div className=''>
            {!weatherData && <div>Loading</div>}
            {weatherData && 
                <div>
                <div id ="test" className='relative h-screen w-full bg-slate-400 flex justify-center items-center flex-col'>
                    <img src = {weatherData.current.condition.icon} alt=''></img>
                    <h1 className='text-4xl font-mono text-white font-bold text-center'>City: {weatherData.location.name}</h1>
                    <p className='text-2xl font-mono mt-1 font-bold text-white'>Temperature: {weatherData.current.temp_c} °C</p>
                    <div className='flex flex-row justify-around w-full mt-20 font-bold text-white text-base font-mono'>
                        <p>Feels like: {weatherData.current.feelslike_c} °C</p>
                        <p>Humidity: {weatherData.current.humidity} </p>
                        <p>Wind: {weatherData.current.wind_kph} kPh</p>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default CurrentWeather;