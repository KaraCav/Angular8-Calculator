import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-payments',
  templateUrl: './monthly-payments.component.html',
  styleUrls: ['./monthly-payments.component.scss']
})
export class MonthlyPaymentsComponent implements OnInit {

  constructor() { }

  getWeatherData() {
fetch('./data.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    console.log(data)
  })
  .catch(err => {
    // Do something for an error here
  })
}

  ngOnInit() {
  }

}
