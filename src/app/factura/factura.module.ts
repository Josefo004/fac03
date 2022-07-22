import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaRoutingModule } from './factura-routing.module';
import { FacturaComponent } from './pages/factura/factura.component';
import { FindFacturaComponent } from './pages/find-factura/find-factura.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [
    FacturaComponent,
    FindFacturaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FacturaRoutingModule,
    SharedModule,
    NgxPermissionsModule
  ],
  exports:[HomeComponent]
})
export class FacturaModule { }
