import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { PagoSoportadoService } from '../../../shared/services/pago-soportado.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pago-soportado',
  templateUrl: './pago-soportado.component.html',
  styleUrl: './pago-soportado.component.css'
})
export class PagoSoportadoComponent implements OnInit{

  private pagoSoportadoService = inject(PagoSoportadoService);

  ngOnInit(): void {
    this.getPagoSoportado();
  }

  displayedColumns:string[] = ['id','nit','razonSocial','valorSoportado','valorPagar'];
  dataSource = new MatTableDataSource<PagoSoportadoElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  getPagoSoportado(): void {
    this.pagoSoportadoService.getPagoSoportado().subscribe((data: any) => {
      this.processPagoSoportadoResponse(data);
    }, (error: any) => {
      console.log("error: ", error);
    });
  }

  search(term: string){
    if(term.length === 0){
        return this.getPagoSoportado();
    }
    this.pagoSoportadoService.searchPagoSoportado(term).subscribe((data: any) =>{
      this.processPagoSoportadoResponse(data);
    },(error: any) =>{
      console.log("error: ", error);
    });

  }

  processPagoSoportadoResponse(resp: any) {
    if (Array.isArray(resp)) {
      const dataPagoSoportado: PagoSoportadoElement[] = resp.map((item: any) => ({
        id: item.id,
        nit: item.nit,
        razonSocial: item.razonSocial,
        valorPagar: item.valorPagar
      }));

      this.dataSource = new MatTableDataSource<PagoSoportadoElement>(dataPagoSoportado);
      this.dataSource.paginator = this.paginator;
    } else {
      console.log("Respuesta no es un array.");
    }
  }



}

export interface PagoSoportadoElement{
  id: number;
  nit: string;
  razonSocial: string;
  valorPagar: number;
}
