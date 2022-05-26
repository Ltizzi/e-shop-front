import { Router } from '@angular/router';
import { EntradaService } from './../../../services/entrada.service';
import { ProductoService } from './../../../services/producto.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-entrada',
  templateUrl: './new-entrada.component.html',
  styleUrls: ['./new-entrada.component.css']
})
export class NewEntradaComponent implements OnInit {

  entrada = new FormGroup({
    producto_id: new FormGroup({
      producto_id: new FormControl
    }),
    cantidad: new FormControl
    // fecha: new FormControl
  })

  productos: any= [];

  constructor(private prodServ: ProductoService,
              private entServ: EntradaService,
              private router: Router) { }

  ngOnInit(): void {
    this.prodServ.getAll().subscribe((data) => this.productos = data);
  }

  onSubmit() {
    let data = this.entrada.value;
    this.entServ.create(data).subscribe(() =>
                    this.router.navigate(['/admin/control']));
  }

}
