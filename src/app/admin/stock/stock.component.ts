import { DatosService } from './../../services/datos.service';

import { Router } from '@angular/router';
import { StockService } from './../../services/stock.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit, OnDestroy {

  stocks: any = [];

  stockFiltrado: any = [];

  subscription: Subscription = new Subscription;

  dtOptions: DataTables.Settings = {};
  
  dtTrigger: Subject<any> = new Subject<any>();

  id: number = 0;
 

  constructor(private stockServ: StockService,
              private router: Router,
              private dato: DatosService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.dato.dataPosta.subscribe(id => this.id = id);
    this.stockServ.getAll().subscribe(data => {
            this.stockFiltrado = this.stocks = data;
            this.dtTrigger.next(0);
    });
            
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
      this.dtTrigger.unsubscribe();
  }

  filter(query:string) {
    this.stockFiltrado = (query) ?
      this.stocks.filter( (p:any) => (p.producto_id.nombre).toLowerCase().includes(query.toLowerCase())):
      this.stocks;
    
  }

  edit(id: number) {
    console.log(id);
    this.id = id;
    console.log(this.id);
    this.dato.cambiarDato(id);
    this.router.navigate(['/admin/producto/edit']);
    
  }

}
