import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentExchangeDailyComponent } from './current-exchange-daily.component';

describe('CurrentExchangeDailyComponent', () => {
  let component: CurrentExchangeDailyComponent;
  let fixture: ComponentFixture<CurrentExchangeDailyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentExchangeDailyComponent]
    });
    fixture = TestBed.createComponent(CurrentExchangeDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
