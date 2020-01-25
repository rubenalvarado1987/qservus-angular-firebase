import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ListadoInscripcionesComponent } from './listado-inscripciones/listado-inscripciones.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'inscripcion', pathMatch: 'full'
  },
  {
    path: 'inscripcion', component: InscripcionComponent
  },
  {
    path:'listado-inscripciones', component: ListadoInscripcionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
