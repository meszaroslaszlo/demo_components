import { AbstractControl, ValidatorFn } from "@angular/forms";

export class CustomValidator {
  static numberBetween(min: number, max: number): ValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value as string;

      const isValidInteger = value.match(/^-{0,1}\d+$/);
      const intValue = parseInt(control.value, 10);
      const outOfRange = intValue > max || intValue < min;
      const isEmptyString = control.value.trim() === '';

      return (!isValidInteger || outOfRange) && !isEmptyString ? { 'Nincsen a két szám között az érték': true } : null;
    }
  }
}
