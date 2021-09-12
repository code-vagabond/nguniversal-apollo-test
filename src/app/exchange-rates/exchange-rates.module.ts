import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExchangeRatesComponent } from './exchange-rates.component';



@NgModule({
  declarations: [
    ExchangeRatesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExchangeRatesComponent
  ]
})
export class ExchangeRatesModule { }
