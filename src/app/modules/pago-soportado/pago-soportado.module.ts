import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoSoportadoComponent } from './components/pago-soportado/pago-soportado.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagoSoportadoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,//importar
    FormsModule,//importar
    ReactiveFormsModule//importar
  ]
})
export class PagoSoportadoModule { }
