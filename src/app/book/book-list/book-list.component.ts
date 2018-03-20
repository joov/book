import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../share/book';
import { ISubscription } from 'rxjs/Subscription' ;


@Component({
  selector: 'sse-wze-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookData: BookDataService) { }

  private bookCache: Book[];
  private subscription: ISubscription;

  ngOnInit() {
    this.subscription = this.bookData.getBooks().subscribe(
      result => this.bookCache = result,
      error => console.error(error.message),
      () => console.log('Book service completed'));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
