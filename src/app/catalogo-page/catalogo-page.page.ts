import { Component, OnInit } from '@angular/core';
import { ServCatalogoService } from '../services/serv-catalogo.service';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.page.html',
  styleUrls: ['./catalogo-page.page.scss'],
})
export class CatalogoPagePage implements OnInit {

  listaLibros:any;

  constructor(servi:ServCatalogoService) { 
    this.listaLibros = servi.getAll();
  }

  ngOnInit() {
  }

}
