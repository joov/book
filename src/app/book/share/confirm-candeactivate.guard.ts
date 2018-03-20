import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BookDetailsComponent } from '../book-details/book-details.component';

@Injectable()
export class ConfirmCandeactivateGuard implements CanDeactivate<BookDetailsComponent> {

  canDeactivate(component: BookDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      console.log('Guard called');
      return false;
  }
}
