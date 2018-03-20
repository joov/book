import { Component, OnInit } from '@angular/core';
import { Book } from '../share/Book';
import { BookDataService } from '../book-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sse-wze-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  private book: Book;

  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {
    this.route.params.mergeMap(
      params => this.bookData.getBookByIsbn( params.isbn)).subscribe(
        book => this.book = book ,
        error => console.log(error.message),
        () => console.log('BookDetails finished'));
  }
  save(book: Book) {
    let entries = Object.entries(book);
    entries.forEach(element => {
      console.log(element[0], ': ', element[1]);
    });

  }
}
