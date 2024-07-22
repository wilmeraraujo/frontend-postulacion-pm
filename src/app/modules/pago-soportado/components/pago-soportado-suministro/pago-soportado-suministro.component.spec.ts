import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoSoportadoSuministroComponent } from './pago-soportado-suministro.component';

describe('PagoSoportadoSuministroComponent', () => {
  let component: PagoSoportadoSuministroComponent;
  let fixture: ComponentFixture<PagoSoportadoSuministroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagoSoportadoSuministroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagoSoportadoSuministroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
