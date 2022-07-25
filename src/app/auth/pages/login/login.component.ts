import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TLogin } from 'src/app/interfaces/interfaces';
import { PermisosService } from '../../services/permisos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  hayError : boolean = false;

  loginForm = this.fb.group({
    email: ['juanco@gamail.com', [Validators.required, Validators.email]],
    password: ['111111',[Validators.required]],
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
          this.router.navigate(['./factura']);
        }else{this.hayError=true} 
        console.log('LOGIN',resp);
      })
  }

  login2(){
    const body = {
      grant_type:"password",
      client_id:"2",
      client_secret:"1Fcw2KSAfeZ9gvebD2RkhuheXZXRlDphhgfuE7pH",
      username:"correo@correo.com",
      password:"12345678"
    }
    this.authservice.login2(body)
      .subscribe(
        resp=>console.log(resp),
      e=>console.log('ERROR',e.error_description)
      );

  }

}
