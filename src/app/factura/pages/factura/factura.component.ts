import { Component } from '@angular/core';
import { pipe } from 'rxjs';
import { TNRazonSocial, TRazonSocial } from 'src/app/interfaces/interfaces';
import { NavegarService } from 'src/app/navegar/services/navegar.service';
import { RazonSocialService } from '../../services/razon-social.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styles: [
  ]
})
export class FacturaComponent  {

  rsnameM:string='';
  nroDocumentoM:string='';
  tipoDocM:string='';

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
    this.razonSocialService.buscarRazon(termino).subscribe();
    console.log('XXXX',this.razonSocial);
  }

  llamaramodal(){
    this.rsnameM='';
    this.nroDocumentoM=''; 
    this.tipoDocM=''
  }

  colocar(){
    this.razonSocialService.sRazonSocial(this.rsnameM.toUpperCase(), this.nroDocumentoM, this.tipoDocM);
    // console.log(this.razonSocial);
    // this.termino=this.nroDocumentoM;
    const newRazon : TNRazonSocial={
      razonSocial:  this.rsnameM.toUpperCase(),
      nroDocumento: this.nroDocumentoM,
      tipoDoc:      this.nroDocumentoM
    };

    if (newRazon.nroDocumento.length>0&&newRazon.nroDocumento.length>3&&newRazon.tipoDoc.length>0) {
      this.razonSocialService.guardarRazon(newRazon)
        .subscribe();
    }

  }

}
