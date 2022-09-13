import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, Subscription, takeUntil } from 'rxjs';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }
    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const hasSymbol = /.*\W.*/.test(value);

    const passwordValid =
      hasUpperCase && hasLowerCase && hasNumeric && hasSymbol;

    return !passwordValid ? { passwordStrength: true } : null;
  };
}

export function sameValueAsFactory(
  getTargetControl: () => AbstractControl | null,
  killSubscriptions: Observable<any>
) {
  let subscription: Subscription | null = null;
  return function (control: AbstractControl) {
    if (subscription) {
      subscription.unsubscribe();
      subscription = null;
    }
    const targetControl = getTargetControl();
    if (!targetControl) {
      return null;
    }
    subscription = targetControl.valueChanges
      .pipe(takeUntil(killSubscriptions))
      .subscribe({
        next: () => {
          control.updateValueAndValidity();
        },
        complete: () => {
          subscription = null;
        },
      });

    return targetControl?.value === control?.value ? null : { sameValue: true };
  };
}

export namespace ErrorAuth {
  export function convertMessage(error: any): string {
    switch (error.code) {
      case 'auth/email-already-in-use': {
        return 'Email is already in use';
      }
      case 'auth/popup-closed-by-user': {
        return 'Pop-up closed before logging in';
      }
      case 'auth/user-not-found': {
        return 'User not found';
      }
      case 'auth/email-already-exists': {
        return 'A user with this email already exists';
      }
      case 'auth/wrong-password': {
        return 'Incorrect password';
      }
      case 'auth/too-many-requests': {
        return 'Too many failed attempts. Access to account temporarily disabled.';
      }
      default: {
        return 'An error occurred, Please try again later';
      }
    }
  }
}
