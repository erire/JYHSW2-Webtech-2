import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../service/book/book.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
 
export class AddBookComponent implements OnInit {
 
  bookForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private bookService: BookService
  ) { 
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
      author: ['']
    })
  }
 
  ngOnInit() { }
 
  onSubmit(): any {
    this.bookService.AddBook(this.bookForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) => {
        console.log(err);
    });
  }
 
}