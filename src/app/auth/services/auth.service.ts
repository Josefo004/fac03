import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TLogin, TUsuario2 } from 'src/app/interfaces/interfaces';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl : string = environment.apiUrl;
  private _usuario : TUsuario2 | undefined;

  get auth() {
    return {...this._usuario}
  }

  constructor(private http: HttpClient) { }

  login(bu:TLogin){
    let urlLogin = `${this.apiUrl}/usuarios?usuario=${bu.usuario}&password=${bu.passwd}`;
    return this.http.get<[]>(urlLogin)
            .pipe(
              tap( resp => console.log('SERVICE', resp) )
            );
  }

  logout(){
    this._usuario = undefined;
    localStorage.removeItem('token');
  }
}
