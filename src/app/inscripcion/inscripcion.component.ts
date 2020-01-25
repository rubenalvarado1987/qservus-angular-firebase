import { Component, OnInit } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';
import { AngularFirestore } from '@angular/fire/firestore';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {
  inscripcion: Inscripcion = new Inscripcion();
  idPrecio: string = 'null';

  constructor(private db: AngularFirestore, private msj: MensajesService) { }

  ngOnInit() {

  }




  guardar() {
    if (this.inscripcion.validar().esValido) {
      let inscripcionAgregar = {
        fecha: this.inscripcion.fecha,
        fechaFinal: this.inscripcion.fechaFinal,
        cliente: this.inscripcion.cliente,
        precios: this.inscripcion.precios,
        subTotal: this.inscripcion.subTotal,
        isv: this.inscripcion.isv,
        total: this.inscripcion.total
      }
      this.db.collection('compromisos').add(inscripcionAgregar).then((resultado) => {
        this.inscripcion = new Inscripcion();

        this.idPrecio = 'null'
        this.msj.mensajeCorrecto('Guardado', 'Se guardo correctamente')
      })
    }
    else {
      this.msj.mensajeAdvertencia('Advertencia', this.inscripcion.validar().mensaje)
    }

  }



}
