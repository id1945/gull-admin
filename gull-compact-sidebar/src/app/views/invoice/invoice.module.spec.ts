import { InvoiceModule } from './invoice.module';

describe('InvoiceModule', () => {
  let invoiceModule: InvoiceModule;

  beforeEach(() => {
    invoiceModule = new InvoiceModule();
  });

  it('should create an instance', () => {
    expect(invoiceModule).toBeTruthy();
  });
});
