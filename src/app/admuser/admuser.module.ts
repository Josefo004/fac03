import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmuserRoutingModule } from './admuser-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolesComponent } from './roles/roles.component';
import { PermisosComponent } from './permisos/permisos.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    RolesComponent,
    PermisosComponent
  ],
  imports: [
    CommonModule,
    AdmuserRoutingModule
  ]
})
export class AdmuserModule { }
