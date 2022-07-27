import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { TpuntoVenta } from 'src/app/interfaces/interfaces';
import { NavegarService } from '../../services/navegar.service';

@Component({
  selector: 'app-punto-venta',
  templateUrl: './punto-venta.component.html',
  styles: [
  ]
})
export class PuntoVentaComponent implements OnInit {

  pdvItems!: TpuntoVenta[];
  
  constructor(private navegarServices: NavegarService,
              private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params
      .pipe(
        switchMap(({ ids }) => this.navegarServices.allPuntoVentas( ids ) )
      )
      .subscribe(pVentas => this.pdvItems = pVentas)
  }

}
