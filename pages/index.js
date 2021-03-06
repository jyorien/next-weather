import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import WeatherList from '../components/WeatherList'
export default function Home() {
  const testData = [
    {
    "main":{
        "temp":263.847,
        "temp_min":263.847,
        "temp_max":263.847,
        "pressure":955.78,
        "sea_level":1037.43,
        "grnd_level":955.78,
        "humidity":91
    },
    "wind":{
        "speed":1.49,
        "deg":159
    },
    "clouds":{
        "all":0
    },
    "weather":[
        {
          "id":800,
          "main":"Clear",
          "description":"Sky is Clear",
          "icon":"01n"
        }
    ],
    "dt":1485749608
    },
    {
    "main":{
        "temp":274.9,
        "pressure":1019,
        "temp_min":274.15,
        "temp_max":275.15,
        "humidity":88
    },
    "wind":{
        "speed":1,
        "deg":0
    },
    "clouds":{
        "all":76
    },
    "weather":[
        {
          "id":500,
          "main":"Rain",
          "description":"light rain",
          "icon":"10d"
        }
    ],
    "dt":1485773778
    }
    ]
  return (
    <div  className="bg-gray-800 h-screen">
      <SearchBar/>
      <WeatherList weathers={testData}/>
    </div>
  )
}
