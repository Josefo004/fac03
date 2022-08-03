import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  @Output() onEnter:EventEmitter<string> = new EventEmitter()
  termino:string='';

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    //console.log(this.termino);
    this.onEnter.emit(this.termino);
  }
}
