import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEquipoComponent } from './reg-equipo.component';

describe('RegEquipoComponent', () => {
  let component: RegEquipoComponent;
  let fixture: ComponentFixture<RegEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
