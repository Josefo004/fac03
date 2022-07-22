import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes:Routes = [
  {
    path: 'auth', loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'factura', loadChildren: ()=>import('./factura/factura.module').then(m=>m.FacturaModule),
    data: {
      permissions: {only: ['LOG'], redirectTo: '/403'}
    }
  },
  {
    path: 'admfactura', loadChildren: ()=>import('./admfactura/admfactura.module').then(m=>m.AdmfacturaModule),
    canActivate:[NgxPermissionsGuard],
    data: {
      permissions: {only: ['LOG','ADMIN'], redirectTo: '/403'
      }
    }
  },
  {
    path: 'admusuario', loadChildren: ()=>import('./admuser/admuser.module').then(m=>m.AdmuserModule)
  },
  {
    path: '403', component: ErrorPageComponent
  },
  {
    path: '**', redirectTo: 'auth'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
