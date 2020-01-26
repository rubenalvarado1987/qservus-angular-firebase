import { Component, OnInit } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';
import { AngularFirestore } from '@angular/fire/firestore';
import { MensajesService } from '../services/mensajes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {
  inscripcion: Inscripcion = new Inscripcion();
  formularioInscripcion: FormGroup;

  constructor(private db: AngularFirestore,
              private msj: MensajesService,
              private creadorFormulario: FormBuilder,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.formularioInscripcion = this.creadorFormulario.group({
      fecha_creacion: new Date(),
      fecha_entrega: ['', Validators.required],
      nombre_responsable: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

  }


  guardar() {
      this.spinner.show();
      if (this.formularioInscripcion.valid){
        //console.log('inscripcionAgregar', this.formularioInscripcion);
        this.db.collection('compromisos').add(this.formularioInscripcion.value).then((resultado) => {
          this.spinner.hide();
          //console.log('save: ', resultado);
          this.msj.mensajeCorrecto('Guardado', 'Se guardo correctamente');
        }).catch((error)=>{
          this.msj.mensajeError('Error', 'No se guardo el registro');
          this.spinner.hide();
        })

      }

  }



}
