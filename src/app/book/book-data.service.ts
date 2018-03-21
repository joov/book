import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable' ;

import {HttpClientModule, HttpClient} from '@angular/common/http';


import { Book } from './share/Book';

const BASE_URL = 'http://localhost:4730/books';

@Injectable()
export class BookDataService {



  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(BASE_URL);
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${BASE_URL}/${isbn}`);
  }

  createBook(book: Book): Observable<Book> {
    const isbn = book.isbn;
    return this.http.post<Book>(`${BASE_URL}`, book);
  }

  updateBook(book: Book): Observable<Book> {
    const isbn = book.isbn;
    return this.http.put<Book>(`${BASE_URL}/${isbn}`, book);
  }

}
