import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes:Routes = [
  {
    path: 'auth', loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'factura', loadChildren: ()=>import('./factura/factura.module').then(m=>m.FacturaModule)
  },
  {
    path: 'admfactura', loadChildren: ()=>import('./admfactura/admfactura.module').then(m=>m.AdmfacturaModule)
  },
  {
    path: '404', component: ErrorPageComponent
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
