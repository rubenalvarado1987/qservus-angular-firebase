import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MensajesService } from './services/mensajes.service';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ListadoInscripcionesComponent } from './listado-inscripciones/listado-inscripciones.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatNativeDateModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscripcionComponent,
    ListadoInscripcionesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule,
    AngularFireStorageModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    NgxDatatableModule,
    MatNativeDateModule,
    MatInputModule
  ],
  exports : [
    MatTableModule,
    MatDatepickerModule
  ],
  providers: [
    AngularFireAuth,
    AngularFirestore,
    MensajesService,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
