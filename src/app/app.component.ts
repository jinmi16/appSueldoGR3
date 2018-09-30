import { Component, OnInit, DoCheck } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuarioService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app';
  emailContacto: string;
  public identity;
  constructor(
    private _UsuarioService: UsuarioService,
    private _route: ActivatedRoute,
    private _router: Router

  ) {

  }
  ngOnInit() {
    console.log(' desde app componente');
    console.log(localStorage.getItem('emailContato'));
    this.emailContacto = localStorage.getItem('emailContato');
    console.log('cargo email del localstorage: ' + this.emailContacto);


    console.log(this._UsuarioService.getIdentity());
    this.identity = this._UsuarioService.getIdentity();

  }
  ngDoCheck() {
    console.log(' desde app componente');
    // para que actualise automaticamete sin recargar la pagina el email que se guarla en localstorage cuando se le ha cambiado
    // this.emailContacto = localStorage.getItem('emailContato');
   // console.log(localStorage.getItem('emailContato'));
   this.identity = this._UsuarioService.getIdentity();

  }

  borrarEmail() {
    // remover solo un elemento del LS
    localStorage.removeItem('emailContato');
    // remover todo el LS
    localStorage.clear();
    // limpío la variable emailcontacto
    this.emailContacto = null;
  }
  logOut() {

    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }


}
