import { Router } from '@angular/router';
import { DatosService } from './../../services/datos.service';
import { StockService } from './../../services/stock.service';
import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  stock: any;
  prod_id: any;
  producto: any;
  load: boolean = false;

  constructor(private prodServ: ProductoService,
              private stockServ: StockService,
              private datoServ: DatosService,
              private router: Router) { }

  ngOnInit(): void {
    this.datoServ.dataPosta.subscribe(data => this.prod_id = data);
    this.prodServ.get(parseInt(this.prod_id)).subscribe(data => 
                {this.producto = data;
                this.stockServ.getAll().subscribe((data:any) => {
                            for(let stock of data){
                              if (stock.producto_id.producto_id === this.prod_id) {
                                this.stock = stock;
                              }
                            this.load = true;
                            }});
                });
  }


  addToCart(prod_id:number) {
    this.datoServ.cambiarDato(prod_id);
    console.log(prod_id);
    this.router.navigate(['/shop-cart'])
   }
 

}
