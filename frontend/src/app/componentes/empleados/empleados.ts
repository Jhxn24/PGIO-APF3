import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './empleados.html',
  styleUrl: './empleados.scss',
})
export class Empleados implements OnInit {
formularioEmpleados! : FormGroup;
listaEmpleados: any[] = [];
contadorId: number=1;
ngOnInit(): void{
  this.formularioEmpleados = new FormGroup({
    nombrecompleto : new FormControl("",[ 
      Validators.required
    ]),
    departamento : new FormControl("",[
      Validators.required
    ]),
    cargo : new FormControl("",[
      Validators.required
    ]),
    correo : new FormControl("",[
      Validators.required,
      Validators.email
    ]),
    telefono : new FormControl("",[
      Validators.required
    ])
  })
  const empleadosGuardados = localStorage.getItem('misEmpleados');
    
  if (empleadosGuardados) {
    this.listaEmpleados = JSON.parse(empleadosGuardados);
    if (this.listaEmpleados.length > 0) {
      const ultimoId = this.listaEmpleados[this.listaEmpleados.length - 1].id;
      this.contadorId = ultimoId + 1;
      }
  }
}

registrar() : void {
  if(this.formularioEmpleados.valid){
    const datosFormulario = this.formularioEmpleados.value;
    const nuevoEmpleado = {
      id: this.contadorId,
      ...datosFormulario
    };
    this.listaEmpleados.push(nuevoEmpleado);
    localStorage.setItem('misEmpleados', JSON.stringify(this.listaEmpleados));
      this.contadorId++;
      console.log("Nuevo empleado registrado: ", nuevoEmpleado);
      alert("Empleado registrado con éxito");
      this.formularioEmpleados.reset();
  } else { 
    alert("Por favor, revisa los campos.");
  }
}
}
