import { Component, OnInit } from '@angular/core';
import { NavegarService } from '../../services/navegar.service';
import { tap } from 'rxjs';
import { Tsucursal } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html'
})
export class SucursalComponent implements OnInit {

  sucItems!: Tsucursal[] | undefined;

  constructor(private navegarServices: NavegarService,
              private router: Router) { }

  ngOnInit(): void {
    this.navegarServices.allSucursales()
      .subscribe( sucrs => this.sucItems = sucrs); 
  }

  irAsucursal(ids:number){
    console.log('Ir a la sucursal ',ids);
    this.router.navigate([`./navegar/puntoventa/${ids}`]);
  }

}
