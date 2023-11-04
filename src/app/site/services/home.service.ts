import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open/currentExchangeRate';

  constructor(private http: HttpClient) { }

  getCurrentExchangeRate(apiKey: string, fromSymbol: string, toSymbol: string): Observable<any> {
    const params = new HttpParams()
      .set('apiKey', apiKey)
      .set('from_symbol', fromSymbol)
      .set('to_symbol', toSymbol);

    return this.http.get(this.apiUrl, { params });
  }
}
