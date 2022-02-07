import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterprinsipalComponent } from './components/footerprinsipal/footerprinsipal.component';
import { EntidadCiudadComponent } from './components/entidad-ciudad/entidad-ciudad.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterprinsipalComponent,
    EntidadCiudadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,EntidadCiudadComponent]
})
export class AppModule { }
