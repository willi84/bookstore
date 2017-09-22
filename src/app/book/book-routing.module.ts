import { BookEditComponent } from './book-edit/book-edit.component';
import { ConfirmCandeactivateGuard } from './shared/confirm-candeactivate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
export const bookRoutes: Routes = [
  {
  path: '',
  component: BookComponent,
  children: [{
    path: '',
    component: BookListComponent
  }, {
    path: ':isbn',
    component: BookDetailComponent,
    canDeactivate: [ConfirmCandeactivateGuard]
    },
    {
      path: ':isbn/edit',
      component: BookEditComponent
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }


