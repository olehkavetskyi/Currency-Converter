import { Component } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  amountFrom: number = 0;
  amountTo: number = 0;
  fromCurrency: string = 'UAH';
  toCurrency: string = 'USD';
  result: number = 0;

  currencies = ['UAH', 'USD', 'EUR'];

  constructor(private converterService: ConverterService) {}
  
  convertFrom(from: string, to: string, amount: number) {
    this.converterService.getCurrency(from, to).subscribe({
          next: (result: any) => {
            this.amountTo = result.conversion_rate * amount;
          }
        });
  }

  convertTo(from: string, to: string, amount: number) {
    this.converterService.getCurrency(from, to).subscribe({
          next: (result: any) => {
            this.amountFrom = result.conversion_rate * amount;
          }
        });
  }
  
  onFromChange() {
    this.convertFrom(this.fromCurrency, this.toCurrency, this.amountFrom);
  }

  onToChange() {
    this.convertTo(this.toCurrency, this.fromCurrency, this.amountTo);
  }
}
