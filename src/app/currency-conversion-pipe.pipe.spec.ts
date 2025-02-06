import { CurrencyConversionPipe } from './currency-conversion-pipe.pipe';

describe('CurrencyConversionPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyConversionPipe();
    expect(pipe).toBeTruthy();
  });
});
