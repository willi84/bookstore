import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { BookDataService } from './../shared/book-data.service';


@Component({
  
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Array<any> = [];
  subscription: any; 
  constructor(public bookData: BookDataService) { 
    
  }
  
  ngOnInit() {
    this.subscription = this.bookData.getBooks()
      .subscribe(books => this.books=books)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
