import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather-logger',
  templateUrl: './weather-logger.component.html',
  styleUrls: ['./weather-logger.component.sass']
})

export class WeatherLoggerComponent implements OnInit {
	cities = '';
	result = [];
	resultText = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  onGetWeather() {
  	let cities = this.cities.split(',');

  	this.result = [];

  	cities.forEach((city) => {
	  	this.weatherService.getWeather(city.trim())
	  		.subscribe((weatherData) => {
	  			console.log(weatherData);

	  			this.resultText = '';
	  			this.result[city] = weatherData;

	  			for (city in this.result)
	  			{
	  				if (this.result[city].cod == 200)
	  				{  					
		  				this.resultText += 'Weather in ' + city + ' - ' + this.result[city].name + '\n';
		  				this.resultText += 'Weather: \n';

		  				this.result[city].weather.forEach((weather) => {
		  					this.resultText += weather.main + ' - ' + weather.description + '\n';
		  				})

		  				this.resultText += 'Temperature: ' + this.result[city].main.temp + ' degree celcius\n\n';
	  				}
	  				else if (this.result[city].cod == 404)
	  				{
	  					this.resultText += 'No such city or zipcode found - ' + city + '\n\n';
	  				}
	  			}
	  		});
  	});

  }

}
