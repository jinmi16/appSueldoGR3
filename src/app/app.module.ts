import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importamos el routing
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// importar nuestro modulos creados
import { ModuloEmailModule } from './modules/moduloemail.module';
import { AdminModule } from './admin/admin.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ParqueComponent } from './components/parque/parque.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
/*
import { MainComponent } from './admin/components/main/main.component';
import { AddComponent } from './admin/components/usuario/add/add.component';
import { EditComponent } from './admin/components/usuario/edit/edit.component';
import { ListComponent } from './admin/components/usuario/list/list.component';
*/


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeeperComponent,
    NotFoundComponent,
    ParqueComponent,
    TiendaComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent
    /*
    MainComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModuloEmailModule,
    AdminModule

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
