import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-vendedor',
  templateUrl: './login-vendedor.component.html',
  styleUrls: ['./login-vendedor.component.css']
})
export class LoginVendedorComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  validateSeller() {
   this.validateInputs();
  }

  validateInputs() {
    if (this.email == "") {
      alert("E-mail inválido");
    } else if (this.password == "") {
      alert("Senha inválida");
    }
  }

}
