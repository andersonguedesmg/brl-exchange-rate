import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-current-exchange-daily',
  templateUrl: './current-exchange-daily.component.html',
  styleUrls: ['./current-exchange-daily.component.scss']
})
export class CurrentExchangeDailyComponent implements OnInit {
  @Input() fromSymbol: string = '';
  loading: boolean = false;
  currentExchangeRate: any;
  isCloseDiffPositive: boolean = true;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    // this.getDailyExchangeRate(this.fromSymbol);
    console.log('CHAMAR');

  }

  getDailyExchangeRate(fromSymbol: string): void {
    this.loading = true;
    const apiKey: string = 'RVZG0GHEV2KORLNA';
    const toSymbol: string = 'BRL';

    console.log('fromSymbol', fromSymbol);

    this.homeService.getDailyExchangeRate(apiKey, fromSymbol, toSymbol).subscribe(data => {
      this.currentExchangeRate = data;
    }, error => {
      console.error('Erro na API:', error);
    }).add(() => {
      this.loading = false;
    });
  }
}
