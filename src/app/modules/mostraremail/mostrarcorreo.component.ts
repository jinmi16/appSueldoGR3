import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-mostrarcorreo',
  template: `
  <div *ngIf="emailContacto">
  <h4> {{title}} </h4>
  <strong> Email de contacto:</strong>
  {{ emailContacto }}
  <button (click) = "borrarEmail()">Eliminar email de contacto</button>
  </div>

  `
})
export class MostrarCorreoComponent implements OnInit, DoCheck {
  title = 'Mostrar correo';
  public emailContacto: string;
  constructor() { }

  ngOnInit() {
    console.log('metodo onInit lanzado');
    this.emailContacto = localStorage.getItem('emailContato');
  }
  ngDoCheck() {
    console.log('metodo DoCheck Lanzado');
    this.emailContacto = localStorage.getItem('emailContato');
  }

  borrarEmail() {
    localStorage.removeItem('emailContato');
    localStorage.clear();
    this.emailContacto = null;
  }

}
