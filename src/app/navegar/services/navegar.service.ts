import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TpuntoVenta, Tsucursal } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavegarService {
  private _sucursalN   : string[]=[];
  private _puntoVentaN : string[]=[];

  private _titulo!: string;

  get titulo(){
    this._titulo='';
    if (this._puntoVentaN.length>0 && this._sucursalN.length>0) {
      this._titulo = this._sucursalN[2]+' - '+this._puntoVentaN[2];
    }
    return this._titulo;
  }

  private apiUrl : string = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  allSucursales(){
    const urlSucursal = `${this.apiUrl}/sucursales`;
    return this.http.get<Tsucursal[]>(urlSucursal);
  }
  
  allPuntoVentas(idS: number){
    const urlPuntoVenta = `${this.apiUrl}/puntoVentas?sucursalId=${idS}`;
    return this.http.get<TpuntoVenta[]>(urlPuntoVenta);
  }
  
  limpiarS(){this._sucursalN=[];}
  get sucursalN(){return this._sucursalN;}
  sSucursal(a:string[]){this._sucursalN = a;}

  limpiarP(){this._puntoVentaN=[];}
  get puntoVentaN(){return this._puntoVentaN;}
  sPuntoVenta(a:string[]){this._puntoVentaN = a;}
  
}
