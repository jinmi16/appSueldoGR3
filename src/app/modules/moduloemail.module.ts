// tslint:disable-next-line:eofline
// importar modulos necesarios para crear modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// importat componentes
import { GuardarCorreoComponent } from './guardaremail/guardarcorreo.component';
import { MostrarCorreoComponent } from './mostraremail/mostrarcorreo.component';
import { MainCorreoComponent } from './main-email/maincorreo.component';

// decorador ngModules para cargar componentes y configuracion de modulos

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    GuardarCorreoComponent,
    MostrarCorreoComponent,
    MainCorreoComponent
  ],
  exports: [MainCorreoComponent]
})
export class ModuloEmailModule { }
