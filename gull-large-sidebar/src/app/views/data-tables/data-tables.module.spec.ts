import { DataTablesModule } from './data-tables.module';

describe('DataTablesModule', () => {
  let dataTablesModule: DataTablesModule;

  beforeEach(() => {
    dataTablesModule = new DataTablesModule();
  });

  it('should create an instance', () => {
    expect(dataTablesModule).toBeTruthy();
  });
});
