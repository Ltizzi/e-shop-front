import { CategoriaService } from './../../services/categoria.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: any = [];
  @Input('categoria') categoria:any;

  constructor(private catServ: CategoriaService) { }

  ngOnInit(): void {
    this.catServ.getAll().subscribe(data => this.categorias = data);
  }

}
