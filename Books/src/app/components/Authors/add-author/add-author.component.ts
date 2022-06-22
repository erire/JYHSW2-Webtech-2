import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../../../service/author/author.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  authorForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private authorService: AuthorService
  ) { 
    this.authorForm = this.formBuilder.group({
      name: [''],
      Date_of_Birth: ['']
    })
  }
 
  ngOnInit() { }
 
  onSubmit(): any {
    this.authorService.AddAuthor(this.authorForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/authors-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
