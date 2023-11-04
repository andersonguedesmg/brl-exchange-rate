import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    LoadingSpinnerComponent,
  ]
})
export class SharedModule { }
