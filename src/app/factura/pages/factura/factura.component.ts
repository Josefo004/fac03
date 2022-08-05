import { Component } from '@angular/core';
import { TRazonSocial } from 'src/app/interfaces/interfaces';
import { NavegarService } from 'src/app/navegar/services/navegar.service';
import { RazonSocialService } from '../../services/razon-social.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styles: [
  ]
})
export class FacturaComponent  {

  get titulo (){
    return this.navegarservice.titulo;
  }

  get razonSocial(){
    return this.razonSocialService.razonSocial;
  }

  termino:string='';

  constructor(private navegarservice: NavegarService,
              private razonSocialService: RazonSocialService) { }

  buscar(termino:string){
    //console.log(termino);
    this.razonSocialService.buscarRazon(termino)
      .subscribe(resp=>console.log(resp));
  }


}
