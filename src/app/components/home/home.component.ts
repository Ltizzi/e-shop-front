import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  productos: any = [];

  constructor(private prodServ: ProductoService){}

  ngOnInit(): void {
      this.prodServ.getAll().subscribe(data => this.productos = data);
  }

  

}
