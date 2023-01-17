import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    ContactoComponent,
    ProductosComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    MenuComponent,
    HomeComponent,
    ContactoComponent,
    ProductosComponent,
    NavComponent
  ]
})
export class ComponentsModule { }
