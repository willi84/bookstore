import { BookDetailComponent } from './../book-detail/book-detail.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ConfirmCandeactivateGuard implements CanDeactivate<BookDetailComponent> {
  canDeactivate(
    //next: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean 
    {
    return confirm('willst du das wirklich?');
  }
}
