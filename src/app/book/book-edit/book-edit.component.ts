import { BookDataService } from './../shared/book-data.service';
import { Component, OnInit } from '@angular/core';
import { Book } from './../shared/book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Book;
  outerSubscription: any;
  innerSubscription: any;
  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {

    this.outerSubscription = this.route.params.subscribe((params: {isbn: string}) => {
         this.innerSubscription =  this.bookData.getBookByIsbn(params.isbn).subscribe(book => this.book = book);
    });
  }
  ngOnDestroy(){
    this.outerSubscription.unsubscribe();
    this.innerSubscription.unsubscribe();
  }

  save(data){
    console.log(data);
  }

}
