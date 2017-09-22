import { ConfirmCandeactivateGuard } from './shared/confirm-candeactivate.guard';
import { BookDataService } from './shared/book-data.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule
  ],
  providers: [BookDataService, ConfirmCandeactivateGuard],
  declarations: [BookComponent,BookDetailComponent,
    BookListComponent,
    BookEditComponent]
})
export class BookModule { }
