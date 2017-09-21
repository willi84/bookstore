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
  constructor(public bookData: BookDataService) { 
    
    this.bookData.getBooks()
      .subscribe(books => this.books=books)
  }

  ngOnInit() {
  }

}
