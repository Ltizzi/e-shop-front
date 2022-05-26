import { DatosService } from './../../services/datos.service';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { EntradaService } from './../../services/entrada.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit, OnDestroy {

  ingresos: any = [];

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();

  subscription: Subscription = new Subscription;

  id: number = 0;

  

  constructor(private entServ: EntradaService,
              private datoServ: DatosService,
              private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.datoServ.dataPosta.subscribe(id => this.id = id);
    this.entServ.getAll().subscribe( data => {
                  this.ingresos = data;
               
                  this.dtTrigger.next(0);});

  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();
    this.dtTrigger.unsubscribe();
      
  }

  edit(id:number) {
    this.id = id;
    this.datoServ.cambiarDato(id);
    this.router.navigate(['/admin/entrada/edit']);

  }


  delIngreso(id:number){
    this.entServ.delete(id).subscribe(() => {
      location.reload();
    })
  }

}