
import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:any = [];

  prodFiltrados:any = [];

  categoria: any; 

  constructor(private prodServ: ProductoService,
              private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.prodServ.getAll().subscribe( data => {
                    this.productos = data;
                    this.actRoute.queryParamMap.subscribe(params => {
                      this.categoria = params.get('categoria');
              
                      this.prodFiltrados = (this.categoria) ?
                        this.productos.filter((prod: any)=> prod.tipo.nombre === this.categoria):
                        this.productos;
                    });
      });
     

   
  }

}
