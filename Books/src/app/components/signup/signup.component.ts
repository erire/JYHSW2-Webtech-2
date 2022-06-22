import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../service/authorization/authorization.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

  signupForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthorizationService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      password: [''],
    });
  }

  ngOnInit() {}

  registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      if (res.result) {
        this.signupForm.reset();
        this.router.navigate(['log-in']);
      }
    });
  }

}
