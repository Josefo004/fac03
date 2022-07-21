import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[
    {
    titulo:'Factura',
    icono:'nav-icon fas fa-copy',
    submenu:[
      {titulo:'Buscar Factura', url:'/factura/findfactura', icono:'far fa-circle nav-icon'},
      {titulo:'Hacer Factura', url:'/factura/factura', icono:'far fa-circle nav-icon'}
    ]
    },
    {
      titulo:'Configuración',
      icono:'nav-icon fas fa-table',
      submenu:[
        {titulo:'Sucursales', url:'/admfactura/sucursal', icono:'far fa-circle nav-icon'},
        {titulo:'Puntos de Venta', url:'/admfactura/puntoventa', icono:'far fa-circle nav-icon'},
        {titulo:'Productos', url:'/admfactura/producto', icono:'far fa-circle nav-icon'},
        {titulo:'Unidad de Medida', url:'/admfactura/unidadmendida', icono:'far fa-circle nav-icon'}
      ]
    }
  ]

  constructor() { }
}
