import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  termino:string='';

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    console.log(this.termino);
  }
}
