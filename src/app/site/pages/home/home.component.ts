import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentExchangeRate: any;
  loading: boolean = false;

  constructor(private homeService: HomeService) { }

  ngOnInit() { }

  getCurrentExchangeRate(fromSymbol: string): void {
    if (!fromSymbol) {
      alert("Por favor, informe o código da moeda.");
    } else {
      this.loading = true;
      const apiKey: string = 'RVZG0GHEV2KORLNA';
      const toSymbol: string = 'BRL';

      this.homeService.getCurrentExchangeRate(apiKey, fromSymbol, toSymbol).subscribe(data => {
        this.currentExchangeRate = data;
      }, error => {
        console.error('Erro na API:', error);
      }).add(() => {
        this.loading = false;
      });
    }
  }
}
