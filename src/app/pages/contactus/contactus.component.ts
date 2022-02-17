import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactusForm = this.fb.group({
    persona: this.fb.group({
      nombres: ['', Validators.required],
    apellidos: ['', Validators.required]
    }),
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', Validators.required],
  });
  
  constructor(
    private fb: FormBuilder
  ) {}

  _onSubmit(){
    if(this.contactusForm.valid){
      console.log(this.contactusForm.value)
    } else
      alert("Formulario no válido")
  }

  ngOnInit(): void {
  }

}


