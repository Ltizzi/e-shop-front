import { CompraService } from './../../services/compra.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit {

  compras: any;

  constructor(private authServ: AuthService,
              private compraServ: CompraService) { }

  ngOnInit(): void {
    this.compraServ.getByUsuario((this.authServ.currentUser).sub)
                        .subscribe(data => this.compras = data)
  }

}
