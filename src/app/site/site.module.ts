import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SiteRoutingModule } from './site-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { CurrentExchangeRateComponent } from './components/current-exchange-rate/current-exchange-rate.component';


@NgModule({
  declarations: [
    HomeComponent,
    CurrentExchangeRateComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class SiteModule { }
