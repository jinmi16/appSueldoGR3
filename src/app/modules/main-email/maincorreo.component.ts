import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincorreo',
  template: `
  <h1>{{title}}</h1>
  <app-mostrarcorreo></app-mostrarcorreo>
  <app-guardarcorreo></app-guardarcorreo>

  `
})
export class MainCorreoComponent implements OnInit {
  title = 'Modulo de correo';
  public emailContacto: string;
  constructor() { }
  ngOnInit() {
    console.log('componente principal de modulo cargado');
  }
}
