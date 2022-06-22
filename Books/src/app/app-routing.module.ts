import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { BooksListComponent } from './components/Books/books-list/books-list.component';
import { AddBookComponent } from './components/Books/add-book/add-book.component';
import { BookDetailComponent } from './components/Books/book-detail/book-detail.component';

import { AuthorListComponent } from './components/Authors/author-list/author-list.component';
import { AddAuthorComponent } from './components/Authors/add-author/add-author.component';
import { AuthorDetailComponent } from './components/Authors/author-detail/author-detail.component';
import { LoginComponent } from '../../src/app/components/Login/login.component';
import { SignUpComponent } from '../../src/app/components/signup/signup.component';
import { AuthorizationGuard } from '../../src/app/service/authorization/authorization.guard';
 
const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'books-list', component: BooksListComponent, canActivate: [AuthorizationGuard] },
  { path: 'add-book', component: AddBookComponent, canActivate: [AuthorizationGuard] },
  { path: 'edit-book/:id', component: BookDetailComponent, canActivate: [AuthorizationGuard] },
  { path: 'authors-list', component: AuthorListComponent, canActivate: [AuthorizationGuard] },
  { path: 'add-author', component: AddAuthorComponent, canActivate: [AuthorizationGuard] },
  { path: 'edit-author/:id', component: AuthorDetailComponent, canActivate: [AuthorizationGuard] }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthorizationGuard]
})
 
export class AppRoutingModule { }
