import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './pages/factura/factura.component';
import { FindFacturaComponent } from './pages/find-factura/find-factura.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      {path: 'findfactura', component: FindFacturaComponent},
      {path: 'factura', component: FacturaComponent},
      {path: '**', redirectTo: 'findfactura'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaRoutingModule { }
