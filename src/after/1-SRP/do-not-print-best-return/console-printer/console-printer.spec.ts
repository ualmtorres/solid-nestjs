import { ConsolePrinter } from './console-printer';

describe('Printer', () => {
  it('should be defined', () => {
    expect(new ConsolePrinter()).toBeDefined();
  });
});
