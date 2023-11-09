import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServCatalogoService } from '../services/serv-catalogo.service';
import { ServMisPrestamosService } from '../services/serv-mis-prestamos.service';

@Component({
  selector: 'app-libro-page',
  templateUrl: './libro-page.page.html',
  styleUrls: ['./libro-page.page.scss'],
})
export class LibroPagePage implements OnInit {

  id:any;
  libro:any;

  constructor(
    private servi : ServCatalogoService, 
    private activateRoute: ActivatedRoute,
    private serviPrestamo: ServMisPrestamosService
    ) { }

  ngOnInit() {
    this .id = this.activateRoute.snapshot.paramMap.get("id");
    this.libro = this.servi.get(Number(this.id));
    console.log(this.id)
  }

  alquilarLibro(){
    this.serviPrestamo.add(this.libro);
  }

  

}
