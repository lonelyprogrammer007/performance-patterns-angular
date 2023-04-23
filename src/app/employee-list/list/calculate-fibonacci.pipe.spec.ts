import { CalculateFibonacciPipe } from './calculate-fibonacci.pipe';

describe('CalculateFibonacciPipe', () => {
  it('create an instance', () => {
    const pipe = new CalculateFibonacciPipe();
    expect(pipe).toBeTruthy();
  });
});
