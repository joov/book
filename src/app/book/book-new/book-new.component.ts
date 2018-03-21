import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms' ;
import { Book } from '../share/Book';
import { IsbnValidatorDirective } from '../share/IsbnValidatorDirective';
import { BookDataService } from '../book-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'sse-wze-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  private form: FormGroup;
  private book: Book;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private bs: BookDataService,
    private router: Router,
    private location: Location) {}

    validateIsbn(c: FormControl) {
      console.log('validation called');
      const ISBN_REGEX = new RegExp('(978|979)-(\\d+)-(\\d+)-(\\d+)-(\\d)' );

      const match: RegExpExecArray = ISBN_REGEX.exec(c.value);
      console.log('match ' + match);
      if (!match || match.length !== 6) {
          return   {
              validateEmail: {
                  valid: false
              }
          };
      }
      const num = match[1] + match[2] + match[3] + match[4];
      console.log(num);
      let sum = 0;
      for (let i = 0 ; i < num.length ; ++i) {
          sum += parseInt(num.charAt(i), 10) * Math.pow(3, i % 2);
      }
      const result = (10 - sum % 10) % 10;
      console.log(result);
      if (result !== parseInt(match[5], 10)) {
          return {
              validateEmail: {
                  valid: false
              }
          };
      }
      return null;
  }


  ngOnInit() {
    this.book = {title: '', isbn: '', subtitle: '', author: '', publisher: {name: '', url: ''}, abstract: ''} ;

    this.form = this.fb.group({
      'title': [this.book.title, Validators.required],
      'isbn': [this.book.isbn,
        Validators.compose([Validators.required, this.validateIsbn])]
    });
  }

  onSubmit(book: Book) {
    this.book.title = book.title;
    this.book.isbn = book.isbn;
    console.log('Create book ', this.book);

    this.bs.createBook(this.book)
      .subscribe(b => {
        console.log('Book created');
        this.router.navigate(['../../..'], {relativeTo: this.route});
                  },
                  e => console.error('Book could not be created'),
                  () => console.log('Finished creation')
);
  }

}
