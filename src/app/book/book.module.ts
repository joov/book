import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookDataService } from './book-data.service';
import { BookComponent } from './book.component';
import { ConfirmCandeactivateGuard } from './share/confirm-candeactivate.guard';
import { BookEditComponent } from './book-edit/book-edit.component';
import { IsbnValidatorDirective } from './share/IsbnValidatorDirective';
import { BookNewComponent } from './book-new/book-new.component';
import { TooltipDirective } from './share/tooltip.directive';
import { ShoutPipe } from './share/shout.pipe';
import { BmRedDirective } from './share/bm-red.directive';


@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailsComponent,
    BookEditComponent,
    IsbnValidatorDirective,
    BookNewComponent,
    TooltipDirective,
    ShoutPipe,
    BmRedDirective],
  providers: [BookDataService,
    ConfirmCandeactivateGuard]
})
export class BookModule { }
