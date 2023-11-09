import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formu = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    pass:new FormControl('',[Validators.required,Validators.minLength(4)]),
    })

  mostrarElemento: boolean = true;

  constructor() {}

  mostrar(){
    if (this.mostrarElemento){
      this.mostrarElemento = false;
    }else{
      this.mostrarElemento
    }
      
  }






}
