import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TLogin } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  hayError : boolean = false;

  loginForm = this.fb.group({
    email: ['juan1577@hotmail.com', [Validators.required, Validators.email]],
    password: ['654321',[Validators.required]],
    remember:[false]
  });

  constructor(private fb: UntypedFormBuilder,
              private authservice: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.hayError = false;
    const usulogin : TLogin = {
      usuario : this.loginForm.value.email,
      passwd : this.loginForm.value.password
    };
    console.log(usulogin);
    this.authservice.login(usulogin)
      .subscribe(resp => {
        if (resp.length>0) {
          this.router.navigate(['./factura'])
        }else{this.hayError=true} 
        console.log(resp);
      })
  }

}
