import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  title = 'COMPONETE TIENDA';
  public miParque;
  public nombreParque: string;
  constructor() { }

  ngOnInit() {
  }
  verDatosParque(event) {
    // console.log(event);
     this.miParque = event;
   }

  mostrarNombre() {
    console.log(this.nombreParque);
  }


}
