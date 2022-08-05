import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxPermissionsModule } from 'ngx-permissions';

import { SharedModule } from '../shared/shared.module';
import { FacturaRoutingModule } from './factura-routing.module';
import { FacturaComponent } from './pages/factura/factura.component';
import { FindFacturaComponent } from './pages/find-factura/find-factura.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalNewRazonSocialComponent } from './pages/modal-new-razon-social/modal-new-razon-social.component';

@NgModule({
  declarations: [
    FacturaComponent,
    FindFacturaComponent,
    HomeComponent,
    ModalNewRazonSocialComponent
  ],
  imports: [
    CommonModule,
    NgxPermissionsModule,
    FacturaRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports:[HomeComponent]
})
export class FacturaModule {}
