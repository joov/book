
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
        console.log('validation called');
        const ISBN_REGEX = new RegExp('(978|979)-(\\d)+-(\\d)+-(\\d)+-(\\d)' );
        console.log('validation called2');

        const match: RegExpExecArray = ISBN_REGEX.exec(c.value);
        console.log('match ' + match);
        if (match.length !== 5) {
            return   {
                validateEmail: {
                    valid: false
                }
            };
        }
        const num = match[0] + match[1] + match[2] + match[3];
        console.log(num);
        let sum = 0;
        for (let i = 0 ; i < num.length ; ++i) {
            sum += parseInt(num.charAt(i), 10) * Math.pow(3, i % 2);
        }
        const result = (10 - sum % 10) % 10;
        console.log(result);
        if (result !== parseInt(match[4], 10)) {
            return {
                validateEmail: {
                    valid: false
                }
            };
        }
        return null;
    }
}
