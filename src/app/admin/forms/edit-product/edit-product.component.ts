import { DatosService } from './../../../services/datos.service';
import { ProductoService } from './../../../services/producto.service';
import { Router } from '@angular/router';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

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

  categoria: any = [];

  id: number = 0;

  productos: any = [];
  
  produ: any = [];

  constructor( private tipoServ: CategoriaService,
                private router: Router,
                private prodServ: ProductoService,
                private dato: DatosService) { }

  ngOnInit(): void {
    this.tipoServ.getAll()
    .subscribe( categoria => this.categoria = categoria);
    this.dato.dataPosta.subscribe(id => {
            this.id = id;
            this.prodServ.get(id).subscribe(data => {
                    this.produ = data;
            });
    });
  }

  onSubmit() {
    let data = this.emptyChecker(this.producto.value);
    data.producto_id = this.produ.producto_id;
    this.prodServ.update(data, data.producto_id).subscribe(() =>
                this.router.navigate(['/admin/control']));
  }

  emptyChecker(data:any) {
  
    for (let prop in data) {

      if (data[prop] === "" || data[prop] === undefined || data[prop] === null) {
        data[prop] = this.produ[prop];
      }
    }
    if (data.tipo.tipo_prod_id === null) {
      data.tipo.tipo_prod_id = this.produ.tipo.tipo_prod_id;
      console.log(data.tipo.tipo_prod_id);
    }
    return data;
  }

}
