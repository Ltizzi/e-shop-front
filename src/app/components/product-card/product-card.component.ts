import { Router } from '@angular/router';
import { DatosService } from './../../services/datos.service';
import { ProductoService } from './../../services/producto.service';
import { CarritoService } from './../../services/carrito.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('prod') prod: any;
  @Input('show-actions') showActions =true;
  

  
  constructor(private datoServ: DatosService,
              private router: Router) { }

  ngOnInit(): void {

   

  }

  addToCart(prod_id:number) {
    this.datoServ.cambiarDato(prod_id);
    console.log(prod_id);
    this.router.navigate(['/shop-cart'])
   }

  viewProduct(prod_id:number){
    this.datoServ.cambiarDato(prod_id);
    this.router.navigate(['/producto'])
  }

}
