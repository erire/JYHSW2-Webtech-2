import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../../../service/book/book.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
 
export class BookDetailComponent implements OnInit {
 
  getId: any;
  updateForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.bookService.GetBook(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        price: res['price'],
        description: res['description'],
        author: res['author']
      });
    });
 
    this.updateForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
      author: ['']
    })
  }
 
  ngOnInit() { }
 
  onUpdate(): any {
    this.bookService.updateBook(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) => {
        console.log(err);
    });
  }
 
}