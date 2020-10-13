function WeatherData(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';
}
Object.defineProperty(WeatherData, 'temperature', {
    get: function() {
return this._temperature;
    },
    set: function(value) {
        return this._temperature;
    }
});