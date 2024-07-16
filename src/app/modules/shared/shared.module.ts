import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  exports:[
    SidenavComponent //exportar SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule, //importar
    MaterialModule,//importar esta linea de comando que importa el material.modules.ts
    HttpClientModule//importar
  ]
})
export class SharedModule { }
