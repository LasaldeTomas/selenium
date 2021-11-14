import { Injectable } from '@angular/core';
import {ListaFuncionesI} from '../../Models/listaFunciones.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MovieI} from '../../Models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:3000/"

  constructor(private http:HttpClient) { }

  getFunciones():Observable<ListaFuncionesI[]>{
    let direccion = this.url + "funciones";
    return this.http.get<ListaFuncionesI[]>(direccion)
  }
  
  getFuncion(id: string | null):Observable<MovieI>{
    let direccion = this.url + "funciones/" + id;
    return this.http.get<MovieI>(direccion)
  }
}
