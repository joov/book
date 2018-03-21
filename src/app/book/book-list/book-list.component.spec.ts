import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { BookDataServiceMock } from '../book-data.service.mock';
import { Book } from '../share/Book';
import { BookDataService } from '../book-data.service';
import 'rxjs/add/observable/of';

describe('BookListComponent', () => {

const books: Book[] = [{

  isbn: '4711',
  title: 'test-title',
  abstract: 'test-abstract',
  subtitle: 'test-subtitle',
  author: 'test-author',
  numPages: 5,
  publisher: {
    name: 'publisher',
    url: 'url'
  },
}];

let component: BookListComponent;
let fixture: ComponentFixture<BookListComponent>;
let dataServiceMock: BookDataServiceMock;

beforeEach(async(() => {

  TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ BookListComponent ],
      providers: [{provide: BookDataService, useClass: BookDataServiceMock}]
    })
    .compileComponents();

    dataServiceMock = TestBed.get(BookDataService);
  }));

  beforeEach(() => {

  });

  it('should call gets book on initialization', () => {

    dataServiceMock.getBooks.and.returnValue(Observable.of(books));

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(dataServiceMock.getBooks).toHaveBeenCalled();
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(1);
  });

  it('should not render a list for no items', () => {

    dataServiceMock.getBooks.and.returnValue(Observable.of([]));

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(0);
  });

});
