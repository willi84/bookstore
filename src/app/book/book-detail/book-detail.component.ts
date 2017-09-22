import { BookDataService } from './../shared/book-data.service';
import { Component, OnInit } from '@angular/core';
import { Book } from './../shared/book';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  outerSubscription: any;
  innerSubscription: any;
  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {
    console.log('init');
    // const bookIsbn = this.route.snapshot.params['isbn'];
    // this.bookData.getBookByIsbn(bookIsbn).subscribe((book) => this.book = book);

    this.outerSubscription = this.route.params.subscribe((params: {isbn: string}) => {
         this.innerSubscription =  this.bookData.getBookByIsbn(params.isbn).subscribe(book => this.book = book);
    });
  }
  ngOnDestroy(){
    console.log('destroy');
    this.outerSubscription.unsubscribe();
    this.innerSubscription.unsubscribe();
  }

}
