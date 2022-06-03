import { UsuarioService } from './../../services/usuario.service';
import { AuthService } from './../../services/auth.service';
import { CompraService } from './../../services/compra.service';
import { Router } from '@angular/router';
import { ShopOrderService } from './../../services/shop-order.service';
import { CarritoService } from './../../services/carrito.service';
import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/compra';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  orders: any = [];
  compra: Compra = new Compra;
  user: any;
 


  constructor(private orderServ: ShopOrderService,
              private compraServ: CompraService,
              private router: Router,
              private authServ: AuthService,
              private userServ: UsuarioService) { }

  ngOnInit(): void {
    this.orderServ.getByUsuario((this.authServ.currentUser).sub).subscribe(data => {
                            this.orders = data;
                            });
    this.userServ.getByUsuario((this.authServ.currentUser).sub).subscribe(data => this.user = data);                      

  }

  calcularTotal(){
    let suma: number = 0;
    for (let order of this.orders) {
      if (order.estado.estado_id == 1)
      suma+=order.total_gastado;
    }
    return suma;
  }

  agregarItems() {
    let items:any = [];
    for (let order of this.orders) {
      if (order.estado.estado_id == 1){
        
        items.push(order);
        
      }
    }
    this.compra.items = items;
    // let items = this.orders.filter( (order:any )=> order.estado.estado_id== 1);
   
  }

  siguiente(){
    this.agregarItems();
    this.compra.monto = this.calcularTotal();
    this.compra.user= this.user;
    console.log(this.compra);
   
    this.compraServ.create(this.compra).subscribe(() =>{

      this.router.navigate(['/order-success']);
    })
    
   
  }

}
