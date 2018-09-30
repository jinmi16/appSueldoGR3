import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { ReturnStatement } from '@angular/compiler';


@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _usuarioService: UsuarioService
  ) { }

  canActivate() {
    const identity = this._usuarioService.getIdentity();
    if (identity && identity.rol === 'ADMIN') {
      return true;
    } else {
      this._router.navigate(['/home']);
      return false;
    }
  }
}
