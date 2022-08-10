import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { TProductoV, TVenta } from 'src/app/interfaces/interfaces';
import { DetalleVentaService } from '../../services/detalle-venta.service';
import { VentasService } from '../../services/ventas.service';
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

  header = [['ID', 'Name', 'Email', 'Profile']]

  tableData = [
    [1, 'John', 'john@yahoo.com', 'HR'],
    [2, 'Angel', 'angel@yahoo.com angel@yahoo.com angel@yahoo.com angel@yahoo.com angel@yahoo.com angel@yahoo.com angel@yahoo.com angel@yahoo.com', 'Marketing'],
    [3, 'Harry', 'harry@yahoo.com', 'Finance'],
    [4, 'Anne', 'anne@yahoo.com', 'Sales'],
    [5, 'Hardy', 'hardy@yahoo.com', 'IT'],
    [6, 'Nikole', 'nikole@yahoo.com', 'Admin'],
    [7, 'Sandra', 'Sandra@yahoo.com', 'Sales'],
    [8, 'Lil', 'lil@yahoo.com', 'Sales'],
    [1, 'John', 'john@yahoo.com', 'HR'],
    [2, 'Angel', 'angel@yahoo.com', 'Marketing'],
    [3, 'Harry', 'harry@yahoo.com', 'Finance'],
    [4, 'Anne', 'anne@yahoo.com', 'Sales'],
    [5, 'Hardy', 'hardy@yahoo.com', 'IT'],
    [6, 'Nikole', 'nikole@yahoo.com', 'Admin'],
    [7, 'Sandra', 'Sandra@yahoo.com', 'Sales'],
    [8, 'Lil', 'lil@yahoo.com', 'Sales'],
    [1, 'John', 'john@yahoo.com', 'HR'],
    [2, 'Angel', 'angel@yahoo.com', 'Marketing'],
    [3, 'Harry', 'harry@yahoo.com', 'Finance'],
    [4, 'Anne', 'anne@yahoo.com', 'Sales'],
    [5, 'Hardy', 'hardy@yahoo.com', 'IT'],
    [6, 'Nikole', 'nikole@yahoo.com', 'Admin'],
    [7, 'Sandra', 'Sandra@yahoo.com', 'Sales'],
    [8, 'Lil', 'lil@yahoo.com', 'Sales'],
    [1, 'John', 'john@yahoo.com', 'HR'],
    [2, 'Angel', 'angel@yahoo.com', 'Marketing'],
    [3, 'Harry', 'harry@yahoo.com', 'Finance'],
    [4, 'Anne', 'anne@yahoo.com', 'Sales'],
    [5, 'Hardy', 'hardy@yahoo.com', 'IT'],
    [6, 'Nikole', 'nikole@yahoo.com', 'Admin'],
    [7, 'Sandra', 'Sandra@yahoo.com', 'Sales'],
    [8, 'Lil', 'lil@yahoo.com', 'Sales'],
    [1, 'John', 'john@yahoo.com', 'HR'],
    [2, 'Angel', 'angel@yahoo.com', 'Marketing'],
    [3, 'Harry', 'harry@yahoo.com', 'Finance'],
    [4, 'Anne', 'anne@yahoo.com', 'Sales'],
    [5, 'Hardy', 'hardy@yahoo.com', 'IT'],
    [6, 'Nikole', 'nikole@yahoo.com', 'Admin'],
    [7, 'Sandra', 'Sandra@yahoo.com', 'Sales'],
    [8, 'Lil', 'lil@yahoo.com', 'Sales']
  ]

  public descargaPDF():void{
    var pdf = new jsPDF();

    pdf.setFontSize(30);
    pdf.text('Angular PDF Table', 1,1);
    pdf.setFontSize(12);
    pdf.setTextColor(99);


    (pdf as any).autoTable({
    head: this.header,
    body: this.tableData,
    theme: 'plain'
    })

    // Open PDF document in browser's new tab
    pdf.output('dataurlnewwindow')

    // Download PDF doc  
    //pdf.save('table.pdf');
   
  }

}
