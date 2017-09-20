import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Array<any> = [];
  constructor(public bookData: BookDataService) { 
    this.books = bookData.getBooks();
  }

  ngOnInit() {
  }

}
