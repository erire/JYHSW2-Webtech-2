import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddBookComponent } from './components/Books/add-book/add-book.component';
import { BookDetailComponent } from './components/Books/book-detail/book-detail.component';
import { BooksListComponent } from './components/Books/books-list/books-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddAuthorComponent } from './components/Authors/add-author/add-author.component';
import { AuthorDetailComponent } from './components/Authors/author-detail/author-detail.component';
import { AuthorListComponent } from './components/Authors/author-list/author-list.component';
import { LoginComponent } from './components/Login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { AuthorizationInterceptor } from './service/authorization/authorization-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookDetailComponent,
    BooksListComponent,
    AddAuthorComponent,
    AuthorDetailComponent,
    AuthorListComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
