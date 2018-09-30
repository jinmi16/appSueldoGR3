import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// importamos modelo de usuario
import { Usuario } from '../../models/usuario';

// importamos servicios
import { GLOBAL } from '../../services/global';
import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsuarioService]
})
export class RegisterComponent implements OnInit {
  public title: String;
  public usuario: Usuario;
  public status: String;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsuarioService


  ) {
    this.title = 'Registro';
    this.usuario = new Usuario('', '', '', '', '', '', '', '', 'USER');
  }

  ngOnInit() {
    console.log('register.componet cargado !!');
    // console.log(this._userService.register());
  }


  onSubmit(registerForm) {
    console.log(this.usuario);

    this._userService.register(this.usuario).subscribe(
      response => {
        console.log(JSON.stringify(response));
        if (response.id) {
          this.status = 'success';
          this.usuario = new Usuario('', '', '', '', '', '', '', '', 'USER');
          registerForm.reset();
        } else {
          this.status = 'error';
        }



      },
      error => {
        console.log(<any>error);
      }

    );

  }


}
