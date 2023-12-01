import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  usdToUah: any = 0;
  eurToUah: any = 0;
  currencies = new Map(
    [
      ["USD", 0],
      ["EUR", 0]
    ]
  );

  constructor(private converterService: ConverterService) {}
  ngOnInit(): void {
    this.getCurrencies('UAH', this.currencies);
    
  }

  getCurrencies(source: string, currencies: Map<string, number>) {
    const observables = [];

    currencies.forEach((value, key) => {
      const observable = this.converterService.getCurrency(key, source);
      observables.push(
        observable.subscribe({
          next: (result: any) => {
            this.currencies.set(key, result.conversion_rate as number);
          }
        })
      );
    });
  }
}
