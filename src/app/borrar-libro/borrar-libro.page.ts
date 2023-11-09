import { Component, OnInit } from '@angular/core';
import { ServMisPrestamosService } from '../services/serv-mis-prestamos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-borrar-libro',
  templateUrl: './borrar-libro.page.html',
  styleUrls: ['./borrar-libro.page.scss'],
})
export class BorrarLibroPage implements OnInit {

  id:any;
  libro:any;

  constructor(
    private activateRoute: ActivatedRoute,
    private serviPrestamo: ServMisPrestamosService
    ) { }

  ngOnInit() {
    this .id = this.activateRoute.snapshot.paramMap.get("id");
    this.libro = this.serviPrestamo.get(Number(this.id));
    console.log(this.id)
  }

  borrarLibro(){
    this.serviPrestamo.eliminarLibro(this.libro);
  }

}
