import { DatosService } from './../../services/datos.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(12),
    ]),
    contraseña: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
    ]),
  });

  constructor(
    private authServ: AuthService,
    private router: Router,
    private datoServ: DatosService
  ) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  onSubmit() {
    let data = this.login.value;
    this.authServ.login(data).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
