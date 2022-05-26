import { Router } from '@angular/router';
import { ProductoService } from './../../../services/producto.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  categoria: any = [];

  producto = new FormGroup({
    nombre: new FormControl,
    marca: new FormControl,
    precio: new FormControl,
    tipo: new FormGroup({
      tipo_prod_id: new FormControl
    }),
    img_url_1: new FormControl,
    img_url_2: new FormControl,
    img_url_3: new FormControl,
    img_url_4: new FormControl,
    about: new FormControl
  })

  constructor(private tipoServ: CategoriaService,
              private prodServ: ProductoService,
              private router: Router) { }

  ngOnInit(): void {
    this.tipoServ.getAll()
          .subscribe( categoria => this.categoria = categoria);
  }

  onSubmit() {
    let data = this.producto.value;
    this.prodServ.create(data).subscribe(() =>
                this.router.navigate(['/admin/control']));
  }

}
