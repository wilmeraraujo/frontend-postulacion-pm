import { TestBed } from '@angular/core/testing';

import { PagoSoportadoSuministroService } from './pago-soportado-suministro.service';

describe('PagoSoportadoSuministroService', () => {
  let service: PagoSoportadoSuministroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoSoportadoSuministroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
