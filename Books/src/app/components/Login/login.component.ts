import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorizationService } from '../../service/authorization/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  signinForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthorizationService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit() {}

  loginUser() {
    this.authService.signIn(this.signinForm.value);
  }

}
