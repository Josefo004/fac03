import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
              private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(){}

}
