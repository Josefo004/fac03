import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PermisosService } from 'src/app/auth/services/permisos.service';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems?:any[];
  
  get auth(){
    return this.authservice.auth;
  }

  constructor(private authservice:AuthService,
              private router:Router,
              private sidebarservice:SidebarService,
              private perm : PermisosService) {
    //this.menuItems = this.sidebarservice.menu;
  }

  ngOnInit(): void {
    
  }

  logout(){
    this.perm.limpiar_permisos();
    this.authservice.logout();
    this.router.navigate(['/']);
  }
  
  navegarA(url:string){
    this.router.navigate([url]);
  }
}
