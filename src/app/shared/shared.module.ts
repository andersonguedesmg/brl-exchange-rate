import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    LoadingSpinnerComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
