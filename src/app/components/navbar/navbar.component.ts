import { DatosService } from './../../services/datos.service';
import { Router } from '@angular/router';
import { CategoriaService } from './../../services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  categorias: any = [];

  constructor(private catServ: CategoriaService,
              private router: Router,
              private dato: DatosService) { }

  ngOnInit(): void {
    this.catServ.getAll().subscribe(data => this.categorias = data);
  }


}
