import { FormWizardModule } from './form-wizard.module';

describe('FormWizardModule', () => {
  let formWizardModule: FormWizardModule;

  beforeEach(() => {
    formWizardModule = new FormWizardModule();
  });

  it('should create an instance', () => {
    expect(formWizardModule).toBeTruthy();
  });
});
