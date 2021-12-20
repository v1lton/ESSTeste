import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  validateClient() {
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
