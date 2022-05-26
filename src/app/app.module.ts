import { ShopOrderService } from './services/shop-order.service';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { DataTablesModule } from 'angular-datatables';
import { UsuarioService } from './services/usuario.service';
import { StockService } from './services/stock.service';
import { ProductoService } from './services/producto.service';
import { EntradaService } from './services/entrada.service';
import { CompraService } from './services/compra.service';
import { CategoriaService } from './services/categoria.service';
import { CarritoService } from './services/carrito.service';
import { DataService } from './services/data.service';
import { ErrorHandler } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { popper } from '@popperjs/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSucessComponent } from './components/order-sucess/order-sucess.component';
import { StockComponent } from './admin/stock/stock.component';
import { VentasComponent } from './admin/ventas/ventas.component';
import { IngresosComponent } from './admin/ingresos/ingresos.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { LoadingComponent } from './commons/loading/loading.component';
import { ControlComponent } from './admin/control/control.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MisComprasComponent } from './components/mis-compras/mis-compras.component';
import { NewProductComponent } from './admin/forms/new-product/new-product.component';
import { EditProductComponent } from './admin/forms/edit-product/edit-product.component';
import { NewCategoryComponent } from './admin/forms/new-category/new-category.component';
import { EditCategoryComponent } from './admin/forms/edit-category/edit-category.component';
import { NewEntradaComponent } from './admin/forms/new-entrada/new-entrada.component';
import { EditEntradaComponent } from './admin/forms/edit-entrada/edit-entrada.component';
import { AppErrorHandler } from './commons/app-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductosComponent,
    ShopCartComponent,
    CheckOutComponent,
    OrderSucessComponent,
    StockComponent,
    VentasComponent,
    IngresosComponent,
    UsuariosComponent,
    LoginComponent,
    NotFoundComponent,
    LoadingComponent,
    ControlComponent,
    CategoriasComponent,
    ProfileComponent,
    MisComprasComponent,
    NewProductComponent,
    EditProductComponent,
    NewCategoryComponent,
    EditCategoryComponent,
    NewEntradaComponent,
    EditEntradaComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
   ],
  providers: [ {provide: ErrorHandler, useClass: AppErrorHandler},
        DataService,
        CarritoService,
        CategoriaService,
        CompraService,
        EntradaService,
        ProductoService,
        StockService,
        UsuarioService,
        ShopOrderService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
