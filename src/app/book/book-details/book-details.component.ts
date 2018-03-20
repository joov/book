import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'sse-wze-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  private book;
  private entries;
  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {
    this.route.params.mergeMap(
      params => this.bookData.getBookByIsbn( params.isbn)).subscribe(
        book => { this.book = book; this.entries = Object.entries(book); },
        error => console.log(error.message),
        () => console.log('BookDetails finished'));
  }

}
