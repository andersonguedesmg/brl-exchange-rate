import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrlCurrent = 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open/currentExchangeRate';
  private apiUrlDaily = 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open/dailyExchangeRate';

  constructor(private http: HttpClient) { }

  getCurrentExchangeRate(apiKey: string, fromSymbol: string, toSymbol: string): Observable<any> {
    const params = new HttpParams()
      .set('apiKey', apiKey)
      .set('from_symbol', fromSymbol)
      .set('to_symbol', toSymbol);

    return this.http.get(this.apiUrlCurrent, { params });
  }

  getDailyExchangeRate(apiKey: string, fromSymbol: string, toSymbol: string): Observable<any> {
    const params = new HttpParams()
      .set('apiKey', apiKey)
      .set('from_symbol', fromSymbol)
      .set('to_symbol', toSymbol);

    return this.http.get(this.apiUrlDaily, { params });
  }
}
