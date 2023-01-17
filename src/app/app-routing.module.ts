import { NgModule } from "@angular/core";
import { RouterModule,Routes  } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

// Creando las rutas
const root: Routes =[
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'productos',
    component: ProductosComponent
  },
  {
    path:'contacto',
    component: ContactoComponent
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(root)
  ],
  exports:
  [
    RouterModule
  ]
})
export class AppRoutingModule{
  
}
