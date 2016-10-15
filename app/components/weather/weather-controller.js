(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(data){
		var weatherElem = $('#weather');
		var data = JSON.parse(data);
		var tempF = data.main.temp * (9/5) - 459.67;
		var roundTempF = Math.round(tempF) +'° F';
		var tempC = data.main.temp - 273.15;
		var roundTempC = Math.round(tempC) +'° C';
		var wind = data.wind.speed;
		var speed = Math.round(wind * 10)/10;
		var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
		var template = `<div class="weather-card text-center">
							<h1>${data.name}</h1>
							<img src="${icon}"</img>
							<h4 class="toC"><span>${roundTempF}</span></h4>
							<h4>wind: ${speed} mph</h4>
						</div>
						<style>
						.toC:hover span {display:none}
						.toC:hover:before {content:"${roundTempC}"}
						</style>`;
						
	
		
		weatherElem.append(template)						
	})
	weatherService.getWeather()
	
}())
		
		
		
		
	
	
	
	
