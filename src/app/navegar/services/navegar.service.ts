import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavegarService {

  private apiUrl : string = environment.apiUrl;
  private _sucursales: any[] | undefined;

  get sucursales(){
    return this._sucursales
  }

  constructor(private http: HttpClient) { }

  allSucursales(){
    let urlSucursal = `${this.apiUrl}/sucursales`;
    return this.http.get<any[]>(urlSucursal)
            .pipe(
              tap(resp => {
                this._sucursales = resp[0];
                //console.log(this._sucursales);
              })
            );
  }
}
