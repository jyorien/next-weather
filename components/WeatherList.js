import WeatherItem from "./WeatherItem"

const WeatherList = ({weathers}) => {
    return (
        <>
            {weathers.map((weather) => <WeatherItem weather={weather}/>)}
        </>
    )
}

export default WeatherList
