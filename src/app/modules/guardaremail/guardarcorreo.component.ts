import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-guardarcorreo',
  template: `<h4> {{title}} </h4>
  <input type="text" [(ngModel)]="emailContacto">
<button (click)="guardarEmail()">Guardar Email</button>`
})
export class GuardarCorreoComponent implements OnInit, DoCheck {
  title = 'Guardar correo';
  public emailContacto: string;
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
  }
  guardarEmail() {
    //  console.log(this.emailContacto);
    // guardamos en localstorage
    localStorage.setItem('emailContato', this.emailContacto);
    // recupero del localstorage:
    console.log(localStorage.getItem('emailContato'));

  }

}
