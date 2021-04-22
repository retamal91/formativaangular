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

    let cont:number = 0;
    let j:number = 0;
    if (this.formulario.value.telefono.length == 12) {
      for (let i of this.formulario.value.telefono) {
        if (i == "-" && (j==3 || j==7)) {
          
          cont += 1;
          
        }
        j += 1
      }
      if (cont == 2) {
        console.log("Teléfono Válido");
        validaciones +=1      
      }
      else{
        console.log("Teléfono No Válido");
      }
    }

    else{
      console.log("Teléfono No Válido");
    }


  

    console.log(validaciones);
    if(validaciones == 3){
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