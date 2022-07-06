import { ProductoService } from './../../../services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  productos: any = [];
  images: any = [];

  constructor(private prodServ: ProductoService) {}

  ngOnInit(): void {
    this.prodServ.getAll().subscribe((data) => {
      this.productos = data;

      for (let i = 0; i < 5; i++) {
        this.images.push(this.productos[i]);
      }

      console.log(this.images);
    });
  }
}
