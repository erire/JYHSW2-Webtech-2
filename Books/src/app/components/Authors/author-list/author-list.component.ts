import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../../service/author/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  Authors:any = [];
 
  constructor(private authorService: AuthorService) { }
 
  ngOnInit(): void {
    this.authorService.GetAuthors().subscribe(res => {
      console.log(res)
      this.Authors =res;
    });    
  }
 
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.authorService.deleteAuthor(id).subscribe((res) => {
        this.Authors.splice(i, 1);
      })
    }
  }

}
