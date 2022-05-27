import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    usuario: new FormControl(''),
    contraseña: new FormControl('')
  })

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let data = this.login.value;
    this.authServ.login(data).subscribe(() =>{
                        
  
                        this.router.navigate(['/']);

                        });
  }

}
