import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginForm } from '@pages/login/components/login-form/interfaces/login-form.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  endpoint: string;

  constructor(private _http: HttpClient) {
    this.endpoint = "/es/login/config"
   }

  /**
   * @name requestFormConfig
   * @description
   * request the form config from the endpoint
   * @returns {*}  {Observable<ILoginForm>}
   * @memberof LoginService
   */
  requestFormConfig(): Observable<ILoginForm> {
    return this._http.get<ILoginForm>(`${this.endpoint}`);
  }
}
