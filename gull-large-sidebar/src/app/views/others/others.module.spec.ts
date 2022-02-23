import { OthersModule } from './others.module';

describe('OthersModule', () => {
  let othersModule: OthersModule;

  beforeEach(() => {
    othersModule = new OthersModule();
  });

  it('should create an instance', () => {
    expect(othersModule).toBeTruthy();
  });
});
