import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TVenta } from 'src/app/interfaces/interfaces';
import { NavegarService } from 'src/app/navegar/services/navegar.service';
import { VentasService } from '../../services/ventas.service';

@Component({
  selector: 'app-find-factura',
  templateUrl: './find-factura.component.html',
  styles: [
  ]
})
export class FindFacturaComponent implements OnInit {

  ventasItems!: TVenta[];

  get titulo (){
    return this.navegarservice.titulo;
  }

  constructor(private navegarservice:NavegarService,
              private router: Router,
              private ventasService: VentasService) { }

  ngOnInit(): void {
    this.ventasService.utimos15()
      .subscribe( vts => this.ventasItems = vts );
  }

  mainNavegar(){
    this.router.navigate(['/navegar']);
    this.navegarservice.limpiarS();
    this.navegarservice.limpiarP();
  }

  buscar(termino:string){
    console.log('DESEDE FIND FACTURA', termino);
  }

}
