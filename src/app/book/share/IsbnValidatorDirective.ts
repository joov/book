
import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateIsbn][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: IsbnValidatorDirective, multi: true }
  ]
})

export class IsbnValidatorDirective {
    validateIsbn(c: FormControl) {
        const ISBN_REGEX = new RegExp('(978|979)-(\d)+-(\d)+-(\d)+-(\d)' );

        return ISBN_REGEX.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    }
}
