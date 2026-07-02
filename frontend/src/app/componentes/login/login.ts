import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit{

    formularioLogin! : FormGroup;

    private readonly USUARIO_VALIDO="admin@pgio.com";
    private readonly PASSWORD = "123456";

    constructor(private router: Router){}


  ngOnInit():void{
    this.formularioLogin = new FormGroup({
      correoA : new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      passwordA : new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  ingresar(): void {
    if(this.formularioLogin.valid){
      const datos = this.formularioLogin.value;
      if(datos.correoA === this.USUARIO_VALIDO && datos.passwordA === this.PASSWORD){
        console.log("Login exitoso: ", datos.correoA)
        alert("Bienvenido, Administrador");
        this.router.navigate(['/empleados']);
        this.formularioLogin.reset();
      } else {
        alert("Datos incorrectos");
      }
    } else {
        alert("Complete todos los campos correctamente");
      }
  }
}
