import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-equipo',
  templateUrl: './reg-equipo.component.html',
  styleUrls: ['./reg-equipo.component.css']
})
export class RegEquipoComponent implements OnInit {

  contactusForm = this.fb.group({
    nombre: ['', [Validators.required]],
    marca: ['', Validators.required],
    modelo: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
  }

}
