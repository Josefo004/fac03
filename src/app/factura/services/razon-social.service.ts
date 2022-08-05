import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TRazonSocial } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RazonSocialService {

  private _razonSocial:TRazonSocial | undefined

  get razonSocial(){
    return {...this._razonSocial}
  }

  private apiUrl : string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  buscarRazon(nroDoc:string){
    const urlRazonSocial = `${this.apiUrl}/razonSocial?nroDocumento=${nroDoc}`;
    console.log(urlRazonSocial);
    return this.http.get<TRazonSocial[]>(urlRazonSocial)
              .pipe(
                map( resp => {
                  if (resp.length>0) {this._razonSocial=resp[0]}
                  else{this.limpiarRazonSocial();}
                  console.log('RSS',this._razonSocial);
                })
              );
  }

  limpiarRazonSocial(){
    this._razonSocial=undefined;
  }

}
