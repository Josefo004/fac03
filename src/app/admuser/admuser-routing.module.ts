import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { PermisosComponent } from './permisos/permisos.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path:'',
    canActivate:[NgxPermissionsGuard],
    data:{
      permissions:{
        only:['ADMIN'],
        redirectTo: '404'
      }
    },
    children: [
      { path:'', component: UsuarioComponent },
      { path:'permiso', component: PermisosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmuserRoutingModule { }
