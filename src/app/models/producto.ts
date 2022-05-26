import { TipoProducto } from "./tipo_prod";

export class Producto{
    nombre: string;
    marca: string;
    about: string;
    img_url_1: string;
    img_url_2: string;
    img_url_3: string;
    img_url_4: string;
    precio: number;
    tipo: TipoProducto;

    constructor( nombre: string, marca: string, about: string, img_url_1: string,
                    img_url_2: string, img_url_3: string, img_url_4: string,
                    precio: number, tipo: TipoProducto) {

                        this.nombre = nombre;
                        this.marca = marca;
                        this.about = about;
                        this.img_url_1 = img_url_1;
                        this.img_url_2 = img_url_2;
                        this.img_url_3 = img_url_3;
                        this.img_url_4 = img_url_4;
                        this.precio = precio;
                        this.tipo = tipo;
                    }
}