import { AdminGuard } from './guard/admin.guard';
import { NoAccessComponent } from './commons/no-access/no-access.component';
import { ProductoComponent } from './components/producto/producto.component';
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
  { path: 'categorias', component: CategoriasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'shop-cart', component: ShopCartComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'order-success', component: OrderSucessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SiginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mis-compras', component: MisComprasComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'no-access', component: NoAccessComponent },
  {
    path: 'admin/control',
    component: ControlComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/ingresos',
    component: IngresosComponent,
    canActivate: [AdminGuard],
  },
  { path: 'admin/stock', component: StockComponent, canActivate: [AdminGuard] },
  {
    path: 'admin/ventas',
    component: VentasComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/usuarios',
    component: UsuariosComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/producto/new',
    component: NewProductComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/producto/edit',
    component: EditProductComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/entrada/new',
    component: NewEntradaComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/entrada/edit',
    component: EditEntradaComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/categoria/new',
    component: NewCategoryComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/categoria/edit',
    component: EditCategoryComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/categoria/list',
    component: CategoriasComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
