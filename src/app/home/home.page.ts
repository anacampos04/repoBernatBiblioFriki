import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILibro } from '../interface/i-libro';
import { ServCatalogoService } from '../services/serv-catalogo.service';

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
lista!: ILibro[]

  mostrarElemento: boolean = true;

  constructor(private serv: ServCatalogoService) {}

  mostrar(){
    if (this.mostrarElemento){
      this.mostrarElemento = false;
    }else{
      this.mostrarElemento
    }
  }

  ionViewWillEnter(){
    this.serv.getAll().subscribe(
      resp => {
        this.lista =resp;
      }
    );
  }

}
