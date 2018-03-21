import {Injectable} from '@angular/core';

declare var jasmine;

@Injectable()

export class BookDataServiceMock {
    getBooks: any = jasmine.createSpy('getBooks');
    getBook: any = jasmine.createSpy('getBook');
}
