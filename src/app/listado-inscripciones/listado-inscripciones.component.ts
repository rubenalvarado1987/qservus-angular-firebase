import { Component, OnInit } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-listado-inscripciones',
  templateUrl: './listado-inscripciones.component.html',
  styleUrls: ['./listado-inscripciones.component.scss']
})
export class ListadoInscripcionesComponent implements OnInit {
  inscripciones: any[] = [];
  constructor(private db: AngularFirestore,
              private spinner: NgxSpinnerService) { 
                
              }

  ngOnInit() {
    this.spinner.show();
    this.inscripciones.length = 0;
    this.db.collection('compromisos').get().subscribe((resultado) => {
        
      this.spinner.hide();

      resultado.forEach((inscripcion) => {

      let inscripcionObtenida = inscripcion.data();
      inscripcionObtenida.id = inscripcion.id;

      //console.log('inscripcionObtenida: ', inscripcionObtenida);

      inscripcionObtenida.fecha_creacion = new Date(inscripcionObtenida.fecha_creacion.seconds * 1000);
      inscripcionObtenida.fecha_entrega = new Date(inscripcionObtenida.fecha_entrega.seconds * 1000);

      this.inscripciones.push(inscripcionObtenida);

      });


    });
  }

}
