import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-exchange-rate',
  templateUrl: './current-exchange-rate.component.html',
  styleUrls: ['./current-exchange-rate.component.scss']
})
export class CurrentExchangeRateComponent implements OnInit {
  loading: boolean = false;
  @Input() currentExchangeRate: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log('currentExchangeRate', this.currentExchangeRate);
  }
}
