import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion',
  standalone:true
})
export class CurrencyConversionPipe implements PipeTransform {
  transform(value: number, currency: string): string {
    const exchangeRate = currency === 'PKR' ? 280 : 1; 
    const convertedValue = value * exchangeRate;

    return currency === 'PKR'
      ? `₨${convertedValue.toLocaleString()}`
      : `$${convertedValue.toLocaleString()}`;
  }
}
