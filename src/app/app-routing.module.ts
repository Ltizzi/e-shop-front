import { SiginComponent } from './components/sigin/sigin.component';
import { EditEntradaComponent } from './admin/forms/edit-entrada/edit-entrada.component';
import { EditCategoryComponent } from './admin/forms/edit-category/edit-category.component';
import { EditProductComponent } from './admin/forms/edit-product/edit-product.component';
import { NewCategoryComponent } from './admin/forms/new-category/new-category.component';
import { NewEntradaComponent } from './admin/forms/new-entrada/new-entrada.component';
import { NewProductComponent } from './admin/forms/new-product/new-product.component';
import { MisComprasComponent } from './components/mis-compras/mis-compras.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { VentasComponent } from './admin/ventas/ventas.component';
import { StockComponent } from './admin/stock/stock.component';
import { IngresosComponent } from './admin/ingresos/ingresos.component';
import { ControlComponent } from './admin/control/control.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { OrderSucessComponent } from './components/order-sucess/order-sucess.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categorias', component: CategoriasComponent},
    { path: 'productos', component: ProductosComponent },
    { path: 'shop-cart', component: ShopCartComponent },
    { path: 'check-out', component: CheckOutComponent },
    { path: 'order-success', component: OrderSucessComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: SiginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'mis-compras', component: MisComprasComponent},
    { path: 'not-found', component: NotFoundComponent },
    { path: 'admin/control', component: ControlComponent },
    { path: 'admin/ingresos', component: IngresosComponent },
    { path: 'admin/stock', component: StockComponent },
    { path: 'admin/ventas', component: VentasComponent },
    { path: 'admin/usuarios', component: UsuariosComponent},
    { path: 'admin/producto/new', component: NewProductComponent },
    { path: 'admin/producto/edit', component: EditProductComponent },
    { path: 'admin/entrada/new', component: NewEntradaComponent },
    { path: 'admin/entrada/edit', component: EditEntradaComponent },
    { path: 'admin/categoria/new', component: NewCategoryComponent},
    { path: 'admin/categoria/edit', component: EditCategoryComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
