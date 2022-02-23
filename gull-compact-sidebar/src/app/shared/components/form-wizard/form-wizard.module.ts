import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WizardComponent, WizardStepComponent],
  exports: [WizardComponent, WizardStepComponent]
})
export class FormWizardModule { }
