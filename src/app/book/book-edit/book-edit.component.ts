import { Component, OnInit } from '@angular/core';
import { Book } from '../share/Book';
import { BookDataService } from '../book-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'sse-wze-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  private book: Book;

  constructor(private route: ActivatedRoute,
    private bookData: BookDataService,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.route.params.mergeMap(
      params => this.bookData.getBookByIsbn( params.isbn)).subscribe(
        book => this.book = book ,
        error => console.log(error.message),
        () => console.log('BookDetails finished'));
  }

  save(book) {
    const entries = Object.entries(book);
    entries.forEach(element => {
      console.log(element[0], ': ', element[1]);
    });

    const updatedBook = Object.assign({}, this.book, book);
    this.bookData.updateBook(updatedBook)
      .subscribe(b => {
        console.log('Book updated');
        this.router.navigate(['../../..'], {relativeTo: this.route});
      },
                 e => console.error('Book could not be updated'),
                 () => console.log('Finished update')
    );

  }

}
