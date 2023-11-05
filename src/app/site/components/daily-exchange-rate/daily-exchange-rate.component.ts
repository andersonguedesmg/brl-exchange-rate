import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-daily-exchange-rate',
  templateUrl: './daily-exchange-rate.component.html',
  styleUrls: ['./daily-exchange-rate.component.scss']
})
export class DailyExchangeRateComponent implements OnInit {
  @Input() fromSymbol: string = '';
  @Input() indShowCards: boolean = false;
  loading: boolean = false;
  dailyExchangeRate: any[] = [];
  isCloseDiffPositive: boolean = true;
  lastMonth: any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    if (this.indShowCards === true) {
      this.getDailyExchangeRate(this.fromSymbol);
    }
  }

  getDailyExchangeRate(fromSymbol: string): void {
    this.loading = true;
    const apiKey: string = 'RVZG0GHEV2KORLNA';
    const toSymbol: string = 'BRL';

    this.homeService.getDailyExchangeRate(apiKey, fromSymbol, toSymbol).subscribe(data => {
      this.dailyExchangeRate = data.data;

      for (let i = 1; i < this.dailyExchangeRate.length; i++) {
        const closingCurrent = this.dailyExchangeRate[i].close;
        const closingPrevious = this.dailyExchangeRate[i - 1].close;
        const difference = ((closingCurrent - closingPrevious) / closingPrevious) * 100;
        this.dailyExchangeRate[i - 1].closeDiff = Number(difference.toFixed(4));
        this.dailyExchangeRate[i - 1].signals = difference > 0 ? 'positive' : (difference < 0 ? 'negative' : 'equal');
      }

      this.lastMonth = this.dailyExchangeRate.slice(0, 30);
    }, error => {
      console.error('Erro na API:', error);
    }).add(() => {
      this.loading = false;
    });
  }
}
