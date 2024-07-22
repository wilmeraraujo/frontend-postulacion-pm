import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagoSoportadoComponent } from '../pago-soportado/components/pago-soportado/pago-soportado.component';
import { PagoSoportadoSuministroComponent } from '../pago-soportado/components/pago-soportado-suministro/pago-soportado-suministro.component';

const childRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pago-soportado', component: PagoSoportadoComponent },
  { path: 'pago-soportado-suministro', component: PagoSoportadoSuministroComponent },
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class RuterChildModule { }
