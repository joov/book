import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookDataService } from './book-data.service';
import { BookComponent } from './book.component';
import { ConfirmCandeactivateGuard } from './share/confirm-candeactivate.guard';


@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailsComponent],
  providers: [BookDataService,
    ConfirmCandeactivateGuard]
})
export class BookModule { }
