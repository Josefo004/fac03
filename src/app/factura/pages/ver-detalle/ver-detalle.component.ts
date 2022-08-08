import { Component, OnInit } from '@angular/core';
import { TProductoV, TVenta } from 'src/app/interfaces/interfaces';
import { DetalleVentaService } from '../../services/detalle-venta.service';
import { VentasService } from '../../services/ventas.service';
import { switchMap } from 'rxjs';
import { NavegarService } from '../../../navegar/services/navegar.service';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styles: [
  ]
})
export class VerDetalleComponent implements OnInit {

  detalleVenta : TProductoV[]=[];
  totalV       : number = 0;
  venta        : TVenta = {
    id: 0,
    razonSocial: '',
    fechHora: new Date(),
    monto: 0,
    nroDocumento: '',
    estado: false,
    puntoVentaId: 0
  }

  get titulo (){
    return this.navegarservice.titulo;
  }

  get idVenta (){
    return this.ventasService.idVenta;
  }

  constructor(private ventasService: VentasService,
              private detalleVentasService: DetalleVentaService,
              private navegarservice: NavegarService) { }

  ngOnInit(): void {
    this.ventasService.buscarUnaVenta(this.idVenta)
      .subscribe(resp => {
        this.venta = resp;
        console.log(this.venta);
      });
    this.detalleVentasService.tomarDetalle(this.idVenta)
      .subscribe(resp => {
        this.detalleVenta = resp;
        console.log(this.detalleVenta);
        this.totalProductos();
      });
  }

  totalProductos(){
    let k = this.detalleVenta.length;
    this.totalV = 0;
    for (let i = 0; i < k; i++) {
      this.totalV+=this.detalleVenta[i].cantidad*this.detalleVenta[i].precioUnitario;
    }
  }

}
