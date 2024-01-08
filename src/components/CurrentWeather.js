function CurrentWeather({weatherData}) {
    if (!weatherData) {
        return <div className="">Loading..</div>
    }

    const currentWeather = weatherData.current

    if (!currentWeather) {
        return <div>No weather data available</div>;
      }
    

    return(
        <div className=''>
            {currentWeather && 
                <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center bg-black bg-opacity-50 px-8 py-4 mt-16 rounded-lg'>
                    <p className='leading-10 text-white font-sans font-medium text-[34px]'>{weatherData.location.name}</p>
                    <p className='font-sans font-normal text-white leading-[70px] text-[96px] mt-3'>{currentWeather.temp_c}°</p>
                    <p className='font-sans font-normal text-graybasee leading-[24px] text-[20px] mt-3'>{currentWeather.condition.text}</p>
                    <div className='flex justify-between'>
                        <p className='font-sans font-normal text-white leading-[24px] text-[20px] mr-3'>{currentWeather.wind_kph} km/h</p>
                        <p className='font-sans font-normal text-white leading-[24px] text-[20px]'>{currentWeather.wind_dir}</p>
                    </div>
                </div>
                <img className="mt-10 mb-20" src="../../house.png" alt="" />
                </div>
            }
        </div>
    )
}

export default CurrentWeather;