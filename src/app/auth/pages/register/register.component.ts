import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TUsuario } from 'src/app/interfaces/interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  hayError : boolean = false;

  registerForm = this.fb.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    nivel: ['2',[Validators.required]],
    password: ['',[Validators.required]],
    remember:[false]
  });

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              private authservice: AuthService) { }

  ngOnInit(): void {
  }

  onRegister(){
    this.hayError = false;
    console.log(this.registerForm.value);
    const newuser : TUsuario = {
      usuario : this.registerForm.value.email,
      password : this.registerForm.value.password,
      nombre : this.registerForm.value.name,
      nivel : this.registerForm.value.nivel
    }
    console.log(newuser);
    this.authservice.registrarUsuario(newuser)
      .subscribe( resp => {
        console.log(resp);
        if (resp==null) {
          this.router.navigate(['./auth/login']);
        }
      });
  }

}
