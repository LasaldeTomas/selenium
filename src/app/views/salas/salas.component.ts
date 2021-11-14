import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
