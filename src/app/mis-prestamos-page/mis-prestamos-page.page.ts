


import { Component, OnInit } from '@angular/core';
import { ServMisPrestamosService } from '../services/serv-mis-prestamos.service';

@Component({
  selector: 'app-mis-prestamos-page',
  templateUrl: './mis-prestamos-page.page.html',
  styleUrls: ['./mis-prestamos-page.page.scss'],
})
export class MisPrestamosPagePage implements OnInit {
  listaPrestamos:any;
  constructor(private servi:ServMisPrestamosService) { 
    this.listaPrestamos = servi.getAll();
  }


  ngOnInit() {
  }

  


  

}
