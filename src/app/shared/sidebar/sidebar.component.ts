import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PermisosService } from 'src/app/auth/services/permisos.service';
import { NavegarService } from 'src/app/navegar/services/navegar.service';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems:any[]=[];
  
  get auth(){
    return this.authservice.auth;
  }

  constructor(private authservice:AuthService,
              private router:Router,
              private sidebarservice:SidebarService,
              private perm : PermisosService,
              private navegarService: NavegarService) {
  }

  ngOnInit(): void {
    
  }

  public menu(){
    this.menuItems = [];
    this.menuItems = this.sidebarservice.menu;
  }

  logout(){
    this.navegarService.limpiarS();
    this.navegarService.limpiarP();
    this.perm.limpiar_permisos();
    this.authservice.logout();
    this.router.navigate(['/']);
  }
  
  mainNavegar(){
    this.router.navigate(['/navegar']);
    this.navegarService.limpiarS();
    this.navegarService.limpiarP();
  }

  navegarA(url:string){
    this.router.navigate([url]);
  }
}
