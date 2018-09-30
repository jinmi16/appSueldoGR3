import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// importamos modelo de usuario
import { Usuario } from '../../models/usuario';

// importamos servicios
import { GLOBAL } from '../../services/global';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public title: String;
  public usuario: Usuario;
  public identity;
  public token: string;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsuarioService


  ) {
    this.title = 'Login';
    this.usuario = new Usuario('', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {
    console.log('login.componet cargado !!');
    /*
    console.log(localStorage.getItem('identity'));
    console.log(localStorage.getItem('token'));

    console.log(this._userService.getIdentity());
    console.log(this._userService.getToken());
    */
  }


  onSubmit() {

    console.log(this.usuario);
    this._userService.signUp(this.usuario).subscribe(
      response => {
        console.log('RESPONSE' + JSON.stringify(response));
        this.identity = response[0];
        console.log('identity' + JSON.stringify(this.identity));
        if (!this.identity || !this.identity.id) {
          console.log(' el usuario no se a logueado correctamente');
        } else {
          console.log('LOGIN CORRECTO');

          this.identity.password = '';
          localStorage.setItem('identity', JSON.stringify(this.identity));

          // conseguir tokken
          this._userService.signUpToken().subscribe(
            response2 => {
              this.token = response2.token;
              if (this.token.length <= 0) {
                console.log('el token no se a generado');
              } else {
                // mostrar token
                this.status = 'succes';
                console.log('token: ' + this.token);
                 localStorage.setItem('token', this.token);
                this._router.navigate(['/']);

              }
            },
            error2 => {
              console.log(<any>error2);
            }
          );
        }
      },
      error => {
        console.log(<any>error);
        const errorMessage = <any>error;
        if (errorMessage != null) {
          const body = JSON.parse(error._body);
          this.status = 'error';
        }
      }
    );
  }

}



