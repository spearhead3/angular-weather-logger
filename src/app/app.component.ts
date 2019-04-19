import { Component } from '@angular/core';
import { VERSION } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Weather Logger';
	version = VERSION;
}
