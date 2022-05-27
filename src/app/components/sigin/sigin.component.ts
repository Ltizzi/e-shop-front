import { AuthService } from './../../services/auth.service';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  login = new FormGroup({
    usuario: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private userServ: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let data = this.login.value;
    this.userServ.create(data).subscribe(() =>{
                        
  
                        this.router.navigate(['/login']);

                        });
  }

}
