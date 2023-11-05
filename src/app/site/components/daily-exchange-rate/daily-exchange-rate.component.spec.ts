import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyExchangeRateComponent } from './daily-exchange-rate.component';

describe('DailyExchangeRateComponent', () => {
  let component: DailyExchangeRateComponent;
  let fixture: ComponentFixture<DailyExchangeRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyExchangeRateComponent]
    });
    fixture = TestBed.createComponent(DailyExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
