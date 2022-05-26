import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  tipo = new FormGroup({
    nombre: new FormControl('')
  });




  constructor(private catServ: CategoriaService, 
              private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    let data = this.tipo.value;
    console.log(data);
    this.catServ.create(data).subscribe(() => 
                    this.router.navigate(['/admin/control']));
  }

}
