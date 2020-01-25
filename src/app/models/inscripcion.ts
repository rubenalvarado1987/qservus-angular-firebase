import { DocumentReference } from '@angular/fire/firestore';

export class Inscripcion{
    fecha_creacion: Date;
    fecha_entrega: Date;
    descripcion: string;
    nombre_responsable: string;
    constructor()
    {
        this.fecha_creacion = this.fecha_creacion;
        this.fecha_entrega = this.fecha_entrega;
        this.descripcion = '';
        this.nombre_responsable = '';
    }

}