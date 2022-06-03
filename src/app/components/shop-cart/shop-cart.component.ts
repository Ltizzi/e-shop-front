import { UsuarioService } from './../../services/usuario.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { ProductoService } from './../../services/producto.service';
import { DatosService } from './../../services/datos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CarritoService } from './../../services/carrito.service';
import { Component, OnInit } from '@angular/core';
import { ShopOrderService } from 'src/app/services/shop-order.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  carrito = new FormGroup({
    
    cantidad: new FormControl,
    producto: new FormGroup({
      producto_id: new FormControl
    }),
    user: new FormGroup({
      user_id: new FormControl
    })
  });

  prod_id: number = 0;
  carritos: any = [];
  prodXAgregar: any;
  cargado: boolean = false;

  user: any;

  old_cart: any;


  constructor(private cartServ: CarritoService,
              private datoServ: DatosService,
              private prodServ: ProductoService,
              private orderServ: ShopOrderService,
              private authServ: AuthService,
              private userServ: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.datoServ.dataPosta.subscribe(data => this.prod_id = data);
    console.log(this.prod_id);
   
    if (this.prod_id != 0) {
      this.prodServ.get(this.prod_id).subscribe(data => {
                            console.log(data);
                            this.prodXAgregar = data;
                            this.cargado = true;
                            localStorage.setItem("pxa_temp", JSON.stringify(data))});
    }
    else if ((localStorage.getItem("pxa_temp" )&& (this.prod_id == 0))) {
      this.prodXAgregar = localStorage.getItem("pxa_temp");
    }
    this.userServ.getByUsuario((this.authServ.currentUser).sub).subscribe(data => this.user = data)
    this.cartServ.getByUsuario((this.authServ.currentUser).sub).subscribe( data => {
                  this.carritos = data;
                  for(let cart of this.carritos) {
                    cart.cant_edit = false;
                  }
                  if (!data){
                    this.carritos = localStorage.getItem("carritos_temp");
                  }
                  else {
                    localStorage.setItem("carritos_temp", JSON.stringify(data));
                  }
                  
               });
    
  }

  crearCarrito(id: number) {
    let data = this.carrito.value;
    data.producto.producto_id = this.prodXAgregar.producto_id;
    data.user.user_id = this.user.user_id;
    console.log("la id del usuario dueño del carrito es" + data.user.user_id);
    this.cartServ.create(data).subscribe(() => {
      localStorage.clear();
      this.datoServ.cambiarDato(0);
      this.prodXAgregar = {};
      this.cargado = false;
      this.ngOnInit();

    })
  }
  
  borrarDelStorage(){
    this.datoServ.cambiarDato(0);
    localStorage.clear();
    this.cargado = false;
    this.ngOnInit();
  }

  delCart(id: number) {
    this.cartServ.delete(id).subscribe(() => this.ngOnInit());
  }

  getCarrito(id:number) {
    this.cartServ.get(id).subscribe(carri => {
            this.old_cart = carri;
    })
  }


  edit(id:number) {
    for (let cart of this.carritos) {
      if (cart.cart_id == id) {
        cart.cant_edit = true;
      }
    }
    this.getCarrito(id);

  }

 

  editarCarrito(id:number){

    let data = this.emptyChecker(this.carrito.value);
    data.cart_id = id;

    this.cartServ.update(data, id).subscribe(() => {
                        for(let cart of this.carritos) {
                          if(cart.cart_id == id) {
                            cart.cant_edit = false;
                          }
                        } 
                        this.ngOnInit()});
  }

  
  emptyChecker(data:any) {
   
    if (data.user.user_id === null) {
      data.user.user_id = this.old_cart.user.user_id;
    }
    if (data.producto.producto_id === null) {
      data.producto.producto_id = this.old_cart.producto.producto_id;
    }
    return data;        
             
                          
                        

  }


  calcularTotal(){
    let suma: number = 0;
    for (let cart of this.carritos) {
      suma+=cart.total_gastado;
    }
    return suma;
  }

  siguiente(){
    for (let carrito of this.carritos) {
      console.log("EL carrito que se subirá es: " + carrito);
      this.orderServ.create(carrito).subscribe(() => 
                console.log("Carga de carrito " + carrito.cart_id + " realizada..."))
    }
    this.cartServ.getAll().subscribe(() => 
                      this.router.navigate(['/check-out']));
    
  }
}
