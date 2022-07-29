import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SharedModule } from '../shared/shared.module';

import { FacturaRoutingModule } from './factura-routing.module';
import { FacturaComponent } from './pages/factura/factura.component';
import { FindFacturaComponent } from './pages/find-factura/find-factura.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    FacturaComponent,
    FindFacturaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgxPermissionsModule,
    FacturaRoutingModule,
    SharedModule
  ],
  exports:[HomeComponent]
})
export class FacturaModule { }
