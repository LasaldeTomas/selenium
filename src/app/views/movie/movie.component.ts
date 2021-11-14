import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ApiService} from '../../services/api/api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MovieI } from '../../Models/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  titulo: string | undefined;
  sala: number | undefined;
  fecha: string | undefined;
  butacas: string | undefined;


  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) {
    
  }
  
  MovieData : MovieI | undefined;
  
  ngOnInit(): void {
    let movieId = this.activerouter.snapshot.paramMap.get('id');
        
    console.log(movieId);
    this.api.getFuncion(movieId).subscribe(data =>{
      this.MovieData=data;
      
      this.titulo= this.MovieData.titulo;
      this.sala=this.MovieData.sala;
      this.fecha=this.MovieData.fecha;
      this.butacas=this.MovieData.butacas_disponibles;
      
    })
  }
  
}
