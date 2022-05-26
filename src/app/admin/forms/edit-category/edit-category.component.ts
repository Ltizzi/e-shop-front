import { Router } from '@angular/router';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  tipo = new FormGroup({
    nombre: new FormControl('')
  });

  id = new FormGroup({
    id: new FormControl('')
  });

  categorias:any = [];

  categoria:any = [];

  id_a_editar: number = 0;

  editor: boolean = false;

  constructor(private catServ: CategoriaService,
              private router: Router) { }

  ngOnInit(): void {

    this.catServ.getAll().subscribe(data => this.categorias = data );
  }

  callEditor() {
    this.id_a_editar= this.id.value.id;
    console.log(this.id_a_editar);
    this.editor = !this.editor;
    this.catServ.get(this.id_a_editar).subscribe(data => {
              this.categoria = data;
              console.log(this.categoria.nombre);}); //para mostrar los valores a editar en el dom
    
  }

  onSubmit() {
    let data = this.tipo.value;
    data.tipo_prod_id = this.id_a_editar;
    console.log(this.id_a_editar);
    this.catServ.update(data, this.id_a_editar).subscribe(() => 
                    this.router.navigate(['/admin/control']));
  }

}
