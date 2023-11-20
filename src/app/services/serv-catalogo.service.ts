import { Injectable } from '@angular/core';
import { ILibro } from '../interface/i-libro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServCatalogoService {

  constructor(private http: HttpClient ) { }

  getAll():Observable<ILibro[]>{
    let url = `${environment.apiURL}/catalogo`;
    return this.http.get<ILibro[]>(url);
    }
}
