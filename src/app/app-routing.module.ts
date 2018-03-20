import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { BookComponent } from './book/book.component';


export const ROUTES: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full'},
    { path: 'books', loadChildren: './book/book.module#BookModule'},
    { path: 'mouse', component: MouseCursorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutineModule {}


