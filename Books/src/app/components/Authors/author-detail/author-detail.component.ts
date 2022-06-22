import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorService } from '../../../service/author/author.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private authorService: AuthorService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.authorService.GetAuthor(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        Date_of_Birth: res['Date_of_Birth']
      });
    });
 
    this.updateForm = this.formBuilder.group({
      name: [''],
      Date_of_Birth: ['']
    })
  }
 
  ngOnInit() { }
 
  onUpdate(): any {
    this.authorService.updateAuthor(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/authors-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
