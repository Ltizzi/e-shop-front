import { RolService } from './../../services/rol.service';
import { UsuarioService } from './../../services/usuario.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any;

  constructor(private authServ: AuthService,
              private userServ: UsuarioService,
              private rolServ: RolService) { }

  ngOnInit(): void {
    this.userServ.getAll().subscribe(data => this.usuarios = data);
  }

  hacerAdmin(user:any) {
  
    this.rolServ.addRolToUser(user).subscribe(()=> this.ngOnInit());
  }

}
