import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-exchange-rate',
  templateUrl: './current-exchange-rate.component.html',
  styleUrls: ['./current-exchange-rate.component.scss']
})
export class CurrentExchangeRateComponent implements OnInit {
  @Input() currentExchangeRate: any;
  loading: boolean = false;
  fromSymbol: string = '';
  indShowCards: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log('currentExchangeRate', this.currentExchangeRate);
    // this.fromSymbol = this.currentExchangeRate.fromSymbol;
    this.fromSymbol = 'USD';
  }

  showCards() {
    this.indShowCards = true;
  }
}
