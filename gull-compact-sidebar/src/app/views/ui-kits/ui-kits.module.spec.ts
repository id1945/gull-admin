import { UiKitsModule } from './ui-kits.module';

describe('UiKitsModule', () => {
  let uiKitsModule: UiKitsModule;

  beforeEach(() => {
    uiKitsModule = new UiKitsModule();
  });

  it('should create an instance', () => {
    expect(uiKitsModule).toBeTruthy();
  });
});
