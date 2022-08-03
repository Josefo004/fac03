import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TVenta } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { NavegarService } from '../../navegar/services/navegar.service';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private apiUrl : string = environment.apiUrl;

  get puntoVenta(){
    return this.navegarService.puntoVentaN;
  }

  constructor(private http: HttpClient,
              private navegarService: NavegarService) { }

  utimos15(){
    const urlVentas = `${this.apiUrl}/ventas?puntoVentaId=${this.puntoVenta[0]}&_sort=id&_order=desc&_limit=15`;
    console.log(urlVentas);
    return this.http.get<TVenta[]>(urlVentas);
  }

  buscarPorDocumento(nd:string){
    const urlVentas = `${this.apiUrl}/ventas?nroDocumento_like=${nd}&puntoVentaId=${this.puntoVenta[0]}&_sort=id&_order=desc`;
    console.log(urlVentas);
    return this.http.get<TVenta[]>(urlVentas);
  }

  buscarPorRazonSocial(rs:string){
    const urlVentas = `${this.apiUrl}/ventas?razonSocial_like=${rs}&puntoVentaId=${this.puntoVenta[0]}&_sort=id&_order=desc`;
    console.log(urlVentas);
    return this.http.get<TVenta[]>(urlVentas);
  }
}
