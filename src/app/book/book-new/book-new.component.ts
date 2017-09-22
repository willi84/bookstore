import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Book } from './../shared/book';


@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  form: FormGroup;
  book: Book;
  constructor(private fb: FormBuilder) { 

    this.form = this.fb.group({
        title: ['', Validators.required],
        author: ['', Validators.required]
  });
  }
    
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.form.value)
  }


 
}
