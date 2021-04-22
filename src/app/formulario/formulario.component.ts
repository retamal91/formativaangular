import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  datos!:string;




  formulario = new FormGroup({
    usuario: new FormControl(''),
    mail: new FormControl(''),
    telefono: new FormControl(''),

  });

  metodo(){

    let validado:Boolean = false;
    let validaciones:number = 0;

    //TODO VaLIdaciones
    
    //validacion largo caracteres

    if(this.formulario.value.usuario.length >3 && this.formulario.value.usuario.length <11){
      validaciones += 1;
      console.log("usuarioValidado");
    }
    //validacion email
    
    let hasUpper = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.formulario.value.mail);
    if (hasUpper){
      validaciones += 1;
      console.log("correo validado");
    }

    //validacion numero
  

    console.log(validaciones);
    if(validaciones == 2){
      validado= true;
    }
    if (validado){
    this.datos =
    `Campos validados:
    Usuario =${this.formulario.value.usuario}
    Email =${this.formulario.value.mail}
    Telefono= ${this.formulario.value.telefono}`
    }
    else
    this.datos = "campos no validados"

  }

  

}