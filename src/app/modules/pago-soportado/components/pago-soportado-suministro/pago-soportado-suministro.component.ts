import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { PagoSoportadoSuministroService } from '../../../shared/services/pago-soportado-suministro.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pago-soportado-suministro',
  templateUrl: './pago-soportado-suministro.component.html',
  styleUrl: './pago-soportado-suministro.component.css'
})
export class PagoSoportadoSuministroComponent  implements OnInit{
  private pagoSoportadoSuministroService = inject(PagoSoportadoSuministroService);
  private snackBar= inject(MatSnackBar);

  ngOnInit(): void {
    this.getPagoSoportado();
  }

  displayedColumns:string[] = ['id','nit','razonSocial','habilitado','valorPosiblePagoFactura','valorPosiblePagoSuministro','valorPagarFactura','valorPagarSuministro'];
  dataSource = new MatTableDataSource<PagoSoportadoSuministroElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  getPagoSoportado(): void {
    this.pagoSoportadoSuministroService.getPagoSoportadoSuministro().subscribe((data: any) => {
      this.processPagoSoportadoResponse(data);
    }, (error: any) => {
      console.log("error: ", error);
    });
  }

  search(term: string){
    if(term.length === 0){
        return this.getPagoSoportado();
    }
    this.pagoSoportadoSuministroService.searchPagoSoportadoSuministro(term).subscribe((data: any) =>{
      this.processPagoSoportadoResponse(data);
    },(error: any) =>{
      console.log("error: ", error);
    });

  }
  processPagoSoportadoResponse(resp: any) {
    if (Array.isArray(resp)) {
      const dataPagoSoportadoSuministro: PagoSoportadoSuministroElement[] = resp.map((item: any) => ({
        id: item.id,
        nit: item.nit,
        razonSocial: item.razonSocial,
        habilitado:item.habilitado,
        valorPosiblePagoFactura: item.valorPosiblePagoFactura,
        valorPosiblePagoSuministro: item.valorPosiblePagoSuministro,
        valorPagarFactura: item.valorPagarFactura,
        valorPagarSuministro: item.valorPagarSuministro,
      }));

      this.dataSource = new MatTableDataSource<PagoSoportadoSuministroElement>(dataPagoSoportadoSuministro);
      this.dataSource.paginator = this.paginator;
    } else {
      console.log("Respuesta no es un array.");
    }
  }
  guardarCambios(element: PagoSoportadoSuministroElement) {
    console.log('Elemento modificado:', element);
    if (element.valorPagarFactura < 1000000 && element.valorPagarFactura!=0) {
      this.mostrarAlerta('El valor a pagar no puede ser menor a $1.000.000');
      element.valorPagarFactura = element.valorPosiblePagoFactura;
      return;
    }
    if (element.valorPagarSuministro < 1000000 && element.valorPagarSuministro!=0) {
      this.mostrarAlerta('El valor a pagar no puede ser menor a $1.000.000');
      element.valorPagarSuministro = element.valorPosiblePagoSuministro;
      return;
    }

    if (element.valorPagarFactura > element.valorPosiblePagoFactura) {
      this.mostrarAlerta('El valor a pagar nivel factura no puede ser mayor que el valor probable de pago nivel factura');
      element.valorPagarFactura = element.valorPosiblePagoFactura;
      return;

    }
    if (element.valorPagarSuministro > element.valorPosiblePagoSuministro) {
      this.mostrarAlerta('El valor a pagar nivel suministro no puede ser mayor que el valor probable de pago nivel suministro');
      element.valorPagarSuministro = element.valorPosiblePagoSuministro;
      return;

    }

    // Llamada al servicio para actualizar el valorPagar
    this.pagoSoportadoSuministroService.actualizarPagoSoportado(element).subscribe(
      (response: any) => {
        console.log('Respuesta del servidor:', response);
        // Aquí podrías implementar lógica adicional si es necesario, como actualizar la tabla después de guardar
      },
      (error: any) => {
        console.error('Error al actualizar:', error);
        // Manejo de errores
      }
    );
  }

  mostrarAlerta(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 5000, // Duración de la alerta en milisegundos
    });
  }
}
export interface PagoSoportadoSuministroElement{
  id: number;
  nit: string;
  razonSocial: string;
  habilitado: string;
  valorPosiblePagoFactura: number;
  valorPagarFactura: number;
  valorPosiblePagoSuministro: number;
  valorPagarSuministro: number;
}
