// modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
// importamos componentes
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/usuario/add/add.component';
import { EditComponent } from './components/usuario/edit/edit.component';
import { ListComponent } from './components/usuario/list/list.component';

import { AdminGuard } from '../services/admin.guard';
import { UsuarioService } from '../services/usuario.service';

@NgModule({
  declarations: [
    MainComponent,
    AddComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule
  ],
  exports: [
  ],
  providers: [AdminGuard, UsuarioService]
})
export class AdminModule { }




