import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book.component';
import { ConfirmCandeactivateGuard } from './share/confirm-candeactivate.guard';



const ROUTES: Routes = [
  { path: '',
  component: BookComponent,
  children: [
    { path: '', component: BookListComponent},
    { path: 'details/:isbn',
      canDeactivate: [ConfirmCandeactivateGuard],
      component: BookDetailsComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
