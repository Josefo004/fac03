import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { TpuntoVenta, Tsucursal } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavegarService {

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
}
