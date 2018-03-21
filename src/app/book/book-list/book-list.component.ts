import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../share/book';
import { ISubscription } from 'rxjs/Subscription' ;
import { Observable } from 'rxjs/Observable' ;


@Component({
  selector: 'sse-wze-book-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookData: BookDataService) { }

  private bookCache: Book[];
  private subscription: ISubscription;
  private bookObservable: Observable<Book[]>;

  ngOnInit() {
    this.bookObservable = this.bookData.getBooks();
  //   this.subscription = this.bookData.getBooks().subscribe(
  //     result => this.bookCache = result,
  //     error => console.error(error.message),
  //     () => console.log('Book service completed'));
  }

}
