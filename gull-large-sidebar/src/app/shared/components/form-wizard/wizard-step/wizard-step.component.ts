import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wizard-step',
  template:
  `
    <div [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `
})
export class WizardStepComponent {
  @Input() title: string;
  @Input() hidden = false;
  @Input() isValid = true;
  @Input() showNext = true;
  @Input() showPrev = true;

  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPrev: EventEmitter<any> = new EventEmitter<any>();
  @Output() onComplete: EventEmitter<any> = new EventEmitter<any>();

  private _isActive = false;
  isDisabled = true;

  constructor() { }

  @Input('isActive')
  set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }

}
