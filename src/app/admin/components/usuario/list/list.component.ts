import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'Listar Usuarios';
  // numbers = [0, 1, 2, 3, 4, 5];
  public users = [];
  numbers = new Array(2);
  constructor(
    private _userService: UsuarioService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUser().subscribe(
      response => {
       // console.log(JSON.stringify(response));
        this.users = response;
      },
      error => {
        console.log(<any>error);
      }

    );
  }

  deleteUser(idUser) {
    this._userService.deleteUser(idUser).subscribe(
      response => {
        console.log(JSON.stringify(response));
       // this.users = response;
       this.getUsers();
      },
      error => {
        console.log(<any>error);
      }

    );
  }

}
