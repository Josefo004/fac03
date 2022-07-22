import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { PermisosService } from '../services/permisos.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService,
              private router: Router,
              private ngxpermisos: NgxPermissionsService,
              private perm: PermisosService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      this.ngxpermisos.loadPermissions(this.perm.permisos);
            
    return true;
  }
  
}
