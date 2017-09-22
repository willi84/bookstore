import { BookDataService } from './shared/book-data.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    
  ],
  providers: [BookDataService],
  declarations: [BookComponent,BookDetailComponent,
    BookListComponent]
})
export class BookModule { }
