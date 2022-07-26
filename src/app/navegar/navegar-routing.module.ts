import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { PuntoVentaComponent } from './pages/punto-venta/punto-venta.component';

const routes:Routes=[
  {
    path:'',
    children:[
      {path:'sucursal', component:SucursalComponent},
      {path:'puntoventa', component:PuntoVentaComponent},
      {path:'**', redirectTo:'sucursal'}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class NavegarRoutingModule { }
