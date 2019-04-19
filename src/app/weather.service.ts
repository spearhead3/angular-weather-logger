import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {
	 
		console.log(`${operation} failed: ${error.message}`);
	 
	 	result = error.error;

		// Let the app keep running by returning an error result.
		return of(result as T);
	  };
	}

  getWeather(city): Observable<Object> {
  	// url + get params of city + temperature unit as degree celcius
		let url = 'http://api.openweathermap.org/data/2.5/weather?appid=5f2b7a9f28e50f97d6cf4d82d4798751&units=Metric&q=' + city;
		
		return this.http.get(url)
			.pipe(
				catchError(this.handleError<Object>('getWeather', {}))
			);
  }



}
