export class ExchangeRateResponse {
  success: boolean;
  lastUpdatedAt: string;
  fromSymbol: string;
  toSymbol: string;
  exchangeRate: number;

  constructor() {
    this.success = false;
    this.lastUpdatedAt = '';
    this.fromSymbol = '';
    this.toSymbol = '';
    this.exchangeRate = 0;
  }
}
