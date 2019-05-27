import { CanDeactivateComponent } from '../can-deactivate/can-deactivate.component';

import { AbstractControl } from '@angular/forms';
export abstract class CanDeactivateFormControlComponent extends CanDeactivateComponent {

  abstract getFormControl(): AbstractControl;

  canDeactivate(): boolean {
      return this.getFormControl().pristine || !this.getFormControl().dirty;
  }
}
