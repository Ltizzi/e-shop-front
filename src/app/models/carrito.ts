import { Producto } from "./producto";

export class Carrito {
    total_gastado: number;
    cantidad: number;
    producto: Producto;
    user: any;

    constructor (total_gastado: number, cantidad: number, producto: Producto, user: any) {
        this.total_gastado = total_gastado;
        this.cantidad = cantidad;
        this.producto = producto;
        this.user = user;

    }

    setTotal_gastado (total: number) {
        this.total_gastado = total;
    }

    setCantidad (total: number) {
        this.cantidad = total;
    }

    setProducto(prod: Producto) {
        this.producto = prod;
    }

}