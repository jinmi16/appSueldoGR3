import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

// importamos modelo de usuario
import { Usuario } from '../../models/usuario';

// importamos servicios
// import { GLOBAL } from '../../services/global';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UsuarioService]
})
export class UserEditComponent implements OnInit {
  public usuario: Usuario;
  public identity;
  public token;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsuarioService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.usuario = this.identity;


  }

  ngOnInit() {
  }
  onSubmit() {
    // console.log(this.usuario);
    delete this.usuario.password; // para no alterar la contraseña
     console.log(this.usuario);
     this._userService.updateuser(this.usuario, this.usuario.id).subscribe(
       response => {
         console.log(JSON.stringify(response));
        },
       error => {
         console.log(<any>error);
       }

     );

   }

}
