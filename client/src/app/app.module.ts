import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http'; //El viejo de la libreria clasica
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [ //se cargan modulos se deben de cargar todos los modulos
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [//Se cargan servicios
    appRoutingProviders
],
  bootstrap: [AppComponent]
})
export class AppModule { }
