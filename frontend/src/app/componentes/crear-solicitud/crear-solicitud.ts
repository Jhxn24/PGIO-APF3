import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-solicitud',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-solicitud.html',
  styleUrl: './crear-solicitud.scss',
})
export class CrearSolicitud implements OnInit {
  formularioSolicitud! : FormGroup;
  constructor(){}

  ngOnInit() : void{

    this.formularioSolicitud = new FormGroup({
      titulo : new FormControl("",[
        Validators.required
      ]),
      descripcion : new FormControl("",[
        Validators.required
      ])
    });
  }
  
  enviarSolicitud() : void {
    if(this.formularioSolicitud.valid){
      const datosSolicitud = this.formularioSolicitud.value;
      let solicitudesGuardadas = JSON.parse(localStorage.getItem('misSolicitudes') || '[]');

      const solicitudFinal = {
        id: solicitudesGuardadas.length + 1,
        fecha: new Date().toLocaleDateString(),
        ...datosSolicitud
      };

      solicitudesGuardadas.push(solicitudFinal);
      localStorage.setItem('misSolicitudes', JSON.stringify(solicitudesGuardadas));

      this.formularioSolicitud.reset();
      alert("¡Solicitud enviada y guardada correctamente!");
    } else {
      alert("Por favor, revisa los campos antes de enviar.");
    }
  }
}


