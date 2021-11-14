import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router} from '@angular/router';
import { ListaFuncionesI } from '../../Models/listaFunciones.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {

  funciones:ListaFuncionesI[] | undefined;

  constructor(private api:ApiService, private router:Router) {}

  ngOnInit(): void {
    this.api.getFunciones().subscribe(data =>{
      this.funciones = data;
    });
  }

  verFuncion(id: string){
    this.router.navigate (['movie',id])
  }

}
