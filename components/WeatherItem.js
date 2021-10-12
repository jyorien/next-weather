var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const WeatherItem = ({weather}) => {
    var date = new Date(weather.dt * 1000);    
    var day = days[date.getDay()];
    var month = months[date.getMonth()];
    var formattedDate = `${day} ${date.getDate()} ${month} ${date.getFullYear()}`

    return (
            <div class="max-w-xl mx-auto my-3">
                <div class="p-4 bg-gray-900 border-primary rounded-md">
                    <div class="flex">
                        {/* left box */}
                        <div class="mr-4 flex items-center flex-col justify-center text-white border border-gray-200 h-26 w-2/3 rounded ">
                            <span>{weather.weather[0].main}</span>
                            <span class='text-5xl'> {(weather.main.temp-273.15).toFixed(2)}&deg;C</span>
                             </div>
                        <div class="space-y-1 flex-col justify-center text-white flex flex-col w-full h-44 ">
                            <span>{formattedDate}</span>
                            <span>{weather.weather[0].description.toLowerCase()}</span>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default WeatherItem
