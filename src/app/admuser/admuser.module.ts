import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmuserRoutingModule } from './admuser-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolesComponent } from './roles/roles.component';
import { PermisosComponent } from './permisos/permisos.component';
import { RegisterComponent } from './register/register.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuarioComponent,
    RolesComponent,
    PermisosComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AdmuserRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule
  ]
})
export class AdmuserModule { }
