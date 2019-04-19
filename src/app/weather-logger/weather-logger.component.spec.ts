import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLoggerComponent } from './weather-logger.component';

describe('WeatherLoggerComponent', () => {
  let component: WeatherLoggerComponent;
  let fixture: ComponentFixture<WeatherLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
