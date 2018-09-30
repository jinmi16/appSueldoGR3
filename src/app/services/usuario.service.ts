import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable'; // si sale algun error instalar la libreia: npm install --save rxjs-compat
import { GLOBAL } from './global';

@Injectable()
export class UsuarioService {
  public url: String = '';
  public identity;
  public token;


  constructor(
    private _http: Http
  ) {
    this.url = GLOBAL.url;

  }

  register(user_to_register) {
    console.log('REGISTRAR: ' + JSON.stringify(user_to_register));
    const params = JSON.stringify(user_to_register);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this._http.post(this.url + 'usuarios', params, { headers: headers }).map(res => res.json());
  }

  signUp(user_to_login, gettoken = null) {
    console.log('login de usuario');
    if (gettoken != null) {
      user_to_login.gettoken = gettoken;
    } else {
      user_to_login.gettoken = false;
    }
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const url_login = this.url + 'usuarios?email=' + user_to_login.email + '&password=' + user_to_login.password;
    console.log(url_login);
    return this._http.get(url_login, { headers: headers })
      .map(res => res.json());
  }

  signUpToken() {
         const headers = new Headers({ 'Content-Type': 'application/json' });
    const url_login = this.url + 'auth/1';
    console.log(url_login);
    return this._http.get(url_login, { headers: headers })
      .map(res => res.json());
  }

  updateuser(user_to_update, id) {
    console.log(this.url + 'usuarios/' + id);
    console.log(JSON.stringify(user_to_update));
    const params = JSON.stringify(user_to_update);
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.getToken() });

    return this._http.put(this.url + 'usuarios/' + id, params, { headers: headers }).map(res => res.json());
  }
  deleteUser(idUser) {
    const headers = new Headers(
      {
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      });
    return this._http.delete(this.url + 'usuarios/' + idUser, { headers: headers }).map(res => res.json());

  }
  getUser() {
    const headers = new Headers(
      {
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      });
    return this._http.get(this.url + 'usuarios', { headers: headers }).map(res => res.json());

  }


  getIdentity() {
    const _identity = JSON.parse(localStorage.getItem('identity'));
    if (_identity !== 'undefined') {
      this.identity = _identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    const _token = localStorage.getItem('token');
    if (_token !== 'undefined') {
      this.token = _token;
    } else {
      this.token = null;
    }
    return this.token;
  }








}
