import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productos: any = [];

  constructor(private prodServ: ProductoService) {}

  ngOnInit(): void {
    // chequea el localstorage por si hay productos, de todas formas los baja y los graba)
    if (localStorage.getItem('productos'))
      this.productos = localStorage.getItem('productos');
    this.prodServ.getAll().subscribe((data) => {
      this.productos = data;
      localStorage.setItem('productos', JSON.stringify(data));
    });
  }
}
