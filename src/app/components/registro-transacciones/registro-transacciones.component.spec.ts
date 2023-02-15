import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTransaccionesComponent } from './registro-transacciones.component';

describe('RegistroTransaccionesComponent', () => {
  let component: RegistroTransaccionesComponent;
  let fixture: ComponentFixture<RegistroTransaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTransaccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
