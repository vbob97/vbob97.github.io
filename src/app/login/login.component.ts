import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.minLength(6)),
  });

  constructor(private router: Router) { }

  onLogin(){
    const { email, password } = this.loginForm.value;
    console.log(email, password);
    //this.router.navigate(['/dashboard']);
  }

}
