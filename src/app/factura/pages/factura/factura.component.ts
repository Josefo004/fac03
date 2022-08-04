import { Component, OnInit } from '@angular/core';
import { NavegarService } from 'src/app/navegar/services/navegar.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styles: [
  ]
})
export class FacturaComponent implements OnInit {

  get titulo (){
    return this.navegarservice.titulo;
  }

  constructor(private navegarservice:NavegarService) { }

  ngOnInit(): void {
  }

}
