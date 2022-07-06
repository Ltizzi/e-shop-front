import { DatosService } from './../../services/datos.service';
import { CarritoService } from './../../services/carrito.service';
import { UsuarioService } from './../../services/usuario.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { CategoriaService } from './../../services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  categorias: any = [];
  logged: boolean = false;
  user: any = [];
  usuario: any;
  cantidadItems: any;

  constructor(
    private catServ: CategoriaService,
    private router: Router,
    private userServ: UsuarioService,
    private authServ: AuthService,
    private datoServ: DatosService
  ) {}

  ngOnInit(): void {
    this.catServ.getAll().subscribe((data) => (this.categorias = data));
    if (this.logged) {
      this.usuario = this.authServ.currentUser;
      this.userServ
        .getByUsuario(this.usuario.sub)
        .subscribe((data) => (this.user = data));
    }
    // this.user = this.userServ.isLogAndGet();
    this.datoServ.numberItemsOnCart.subscribe(
      (data) => (this.cantidadItems = data)
    );
  }

  isLogIn() {
    return this.authServ.isLoggedIn();
  }

  isAdmin() {
    if (this.authServ.isAdmin()) {
      this.logged = true;
      return true;
    }
    return false;
  }

  logout() {
    this.authServ.logout();
    this.ngOnInit();
    this.router.navigate(['/']);
  }

  // contarItems() {
  //   this.cartServ
  //     .getByUsuario(this.authServ.currentUser.sub)
  //     .subscribe((data) => {
  //       this.carritos = data;
  //       if (this.carritos.length > 0) {
  //         this.cantidadItems = this.carritos.length;
  //         console.log(this.carritos.length);
  //       } else this.cantidadItems = 0;
  //     });
  // }
}
