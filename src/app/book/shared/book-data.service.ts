import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable()
export class BookDataService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.http = http;
    this.baseUrl = 'http://localhost:4730/books'
   }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl);
  }
  getBookByIsbn(isbn:string): Observable<Book>{
    return this.http.get<Book>(this.baseUrl+ "/"+isbn);
  }
}
