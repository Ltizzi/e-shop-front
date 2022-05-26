import { CompraService } from './../../services/compra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventas:any =[];
  
  constructor(private ventServ: CompraService) { }

  ngOnInit(): void {

    this.ventServ.getAll().subscribe(data => this.ventas = data)
  }

}
