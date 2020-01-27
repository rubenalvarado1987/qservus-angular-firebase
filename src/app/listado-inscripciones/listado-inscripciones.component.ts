import { Component, OnInit, ViewChild } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-listado-inscripciones',
  templateUrl: './listado-inscripciones.component.html',
  styleUrls: ['./listado-inscripciones.component.scss']
})
export class ListadoInscripcionesComponent implements OnInit {
  
  public inscripciones: any[] = [];
   
  public rows = [];

  columns = [
    { name: 'Fecha Creacion', width: 140 },
    { name: 'Fecha Comprometida', width: 140 },
    { name: 'Responsable', width: 200 },
    { name: 'Descripcion', width: 300 }
  ];


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

      let fechaCreacionString = inscripcionObtenida.fecha_creacion.getDate()+'-'+inscripcionObtenida.fecha_creacion.getMonth()+1 +'-'+inscripcionObtenida.fecha_creacion.getFullYear();
      let fechaCompromisoString = inscripcionObtenida.fecha_entrega.getDate()+'-'+ (parseInt(inscripcionObtenida.fecha_entrega.getMonth())+1) +'-'+inscripcionObtenida.fecha_entrega.getFullYear();

      this.rows.push(
        { fechaCreacion: fechaCreacionString,
          fechaComprometida: fechaCompromisoString,
          responsable: inscripcionObtenida.nombre_responsable,
          descripcion: inscripcionObtenida.descripcion });

      });

      //console.log("this.rows: ",this.rows);
      this.rows = [...this.rows];


    });
    
    
  }

}
export interface Compromiso {
  fecha_creacion: Date;
  fecha_entrega: Date;
  descripcion: string;
  nombre_responsable: string;
}