import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidoContrasenaComponent } from './olvido-contrasena.component';

describe('OlvidoContrasenaComponent', () => {
  let component: OlvidoContrasenaComponent;
  let fixture: ComponentFixture<OlvidoContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvidoContrasenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlvidoContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
