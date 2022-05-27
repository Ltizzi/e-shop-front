import { AuthService } from './../../services/auth.service';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  load:boolean = false;

  constructor(private userServ: UsuarioService, private authServ: AuthService) { }

  ngOnInit(): void {
   if (this.authServ.isLoggedIn()) {
      this.userServ.getByUsuario((this.authServ.currentUser).sub)
                      .subscribe(data => {
                            this.user = data;
                            this.load = true;
                            });
   }
  }

}
