import { useState } from "react";

const WeatherForecast = ({weatherData}) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [isWeekly, setIsWeekly] = useState(true)
    const [hourlyData, setHourlyData] = useState(null);
    
    //If there is no weather data available set the screen to loading
    if (!weatherData) {
        return <div className="">Loading..</div>
    }

    //Destructuring object for getting forecast data easier
    const weatherForecast = weatherData.forecast.forecastday

    //Creating functions to handle click on Hourly and Weekly forecast

    const handleHourlyClick = () => {
        setIsWeekly(false)

        const currentDate = new Date();

        const nextFourHours = weatherForecast[0].hour.filter((hour) => {
            const hourTime = new Date(hour.time_epoch * 1000)
            return hourTime > currentDate && hourTime <= new Date(currentDate.getTime() + 4 * 60 * 60 * 1000)
        });
        
        setHourlyData(nextFourHours)
    }

    const handleWeeklyClick = () => {
        setIsWeekly(true)
        setHourlyData(null)
    }

    return ( 
        <>
      {isWeekly ? (
        <div id="background" className="relative flex justify-center items-center flex-col w-full rounded-t-3xl bottom-0 h-[30%]">
          <div className="flex justify-around w-full z-10">
            <button onClick={handleWeeklyClick} className="text-graybasee text-lg font-sans my-3">Weekly Forecast</button>
            <button onClick={handleHourlyClick} className="text-gray-500 text-lg font-sans my-3">Hourly Forecast</button>
          </div>
          <div className="flex flex-row justify-around w-full">
            {weatherForecast.map((day, index) => {
              const date = new Date(day.date);
              const dayOfWeek = daysOfWeek[date.getDay()];
              return (

                <div key={index} id="linear-forecast" className="h-[160px] w-[70px] rounded-[48px] bottom-0 flex flex-col bg-[#48319d] bg-opacity-[0.4] mb-20 mt-5 justify-evenly items-center">
                <div key={index} id="linear-forecast" className="h-[160px] w-[70px] rounded-[48px] flex mb-20 mt-5 flex-col bg-[#48319d] bg-opacity-[0.4] justify-evenly items-center">
                  <p className="text-white font-sans text-md">{dayOfWeek}</p>
                  <img className="h-[48px] aspect-auto" src={day.day.condition.icon} alt="Weather Icon" />
                  <p className="text-white font-sans text-lg">{day.day.avgtemp_c}°</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div id="background" className="relative flex justify-center items-center flex-col w-full rounded-t-3xl bottom-0 h-[30%]">
          <div className="flex justify-around w-full">
            <button onClick={handleWeeklyClick} className="text-gray-500 text-lg font-sans my-3">Weekly Forecast</button>
            <button onClick={handleHourlyClick} className="text-graybasee text-lg font-sans my-3">Hourly Forecast</button>
          </div>
          {hourlyData ? (
            <div className="flex flex-row justify-around w-full">
              {hourlyData.map((hour, index) => {
                const hourTime = new Date(hour.time_epoch * 1000);
                const formattedHour = hourTime.getHours();
                const icon = hour.condition.icon;

                return (
<<<<<<< HEAD
                  <div id="linear-forecast" key={index} className="h-[160px] w-[70px] rounded-[48px] flex flex-col mb-10 mt-5 z-10 bg-[#48319d] bg-opacity-[0.4] justify-evenly items-center">
=======
                  <div id="linear-forecast" key={index} className="h-[160px] w-[70px] rounded-[48px] flex mb-20 mt-5 flex-col z-10 bg-[#48319d] bg-opacity-[0.4] justify-evenly items-center">
>>>>>>> 09abfc05201240c453359407552f2a4ed66886b3
                    <p className="text-white font-sans text-md">{formattedHour}{hourTime > 12 ? ' AM' : ' PM'}</p>
                    <img className="h-[48px] aspect-auto" src={icon} alt="Weather Icon" />
                    <p className="text-white font-sans text-lg">{hour.temp_c}°</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>Loading hourly forecast...</div>
          )}
        </div>
      )}
    </>
    );
}
 
export default WeatherForecast;
