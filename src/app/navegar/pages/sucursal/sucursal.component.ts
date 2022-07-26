import { Component, OnInit } from '@angular/core';
import { NavegarService } from '../../services/navegar.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html'
})
export class SucursalComponent implements OnInit {

  sucItems!: any[] | undefined;

  constructor(private navegarServices: NavegarService) { }

  ngOnInit(): void {
    this.navegarServices.allSucursales()
      .pipe(
        tap((resp: any)=>{
          console.log(resp);
          this.sucItems = this.navegarServices.sucursales;
          console.log('total componete ', this.sucItems);
        })
    ).subscribe(); 
    
    //this.sucItems = this.navegarServices.sucursales;
    //console.log('total componete ', this.sucItems);
  }

}
