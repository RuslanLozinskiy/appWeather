'use strict';
getWeather.addEventListener('click', searchWeather);

function searchWeather() {
    let apiKey = '40e21e63534c1203aa405f3849ad5a3d';
    let cityName = getNameCity.value;
    if (cityName.trim().length == 0) {
        return alert('Please enter city NAME');
    }
    let http = new XMLHttpRequest();
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+' &units=metric&appid=' + apiKey;
    let method = 'GET';
    http.open(method, url);
    http.onreadystatechange = function () {
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200){
            let data = JSON.parse(http.responseText);
        let weatherData = new WeatherData(cityName, data.weather[0].description);
        weatherData._temperature = data.main.temp;
     showWeatherInBox(weatherData);
        
        
    } else if (http.readyState == XMLHttpRequest.DONE) {
        alert('WRONG');
    }
    }
    http.send();
}

function showWeatherInBox(WeatherData) {
    getShowWeatherNameCity.textContent = "City: " + WeatherData.cityName;
    getShowWeatherTemperature.textContent = "Temperature " + WeatherData._temperature;
    getShowWeatherNameCity.textContent = "precipitation " + WeatherData.description;


}