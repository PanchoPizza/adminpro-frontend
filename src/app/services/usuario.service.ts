import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RegisterForm } from '../interfaces/register-form.interface';

import { environment } from '../../environments/environment.prod';
import { LonginForm } from '../interfaces/login-form.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  crearUsuario(formData: RegisterForm){
 return this.http.post(`${base_url}/usuarios`, formData);


  }
  login(formData: LonginForm) {
    return this.http.post(`${base_url}/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.data);
      })
    );
  }


  loginGoogle(token){
    
    return this.http.post(`${base_url}/login/google`,{token}).pipe(
      tap((resp: any) => {
        localStorage.setItem('token',resp.data);
      })
    );
  }

  validarToken():Observable<boolean> {
    const token = localStorage.getItem("token") || '';
   
    return this.http.post(`${base_url}/login/renew`,
   { token
  })
   .pipe(
      tap((resp:any)=>{
      localStorage.setItem("token",resp.data);
      }),
      map((resp) =>true),
      catchError((error)=> of(false))
      );
  }
}
