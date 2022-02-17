import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegComponenteComponent } from './reg-componente.component';

describe('RegComponenteComponent', () => {
  let component: RegComponenteComponent;
  let fixture: ComponentFixture<RegComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
