import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  name: string = "";
  cpf: string = "";
  email: string = "";
  contact_number: string = "";
  birthday: string = "";
  address: string = "";
  password: string = "";
  password_confirm: string = "";

  clients: string[] = []; //TODO: Criar um classe cliente para conter os dados

  constructor() { }

  ngOnInit(): void {
  }

  createClient() {
    if (this.isClientValide()) {
      if (this.arePasswordsEqual()) {
        //TODO: Chamada do back
        this.clients.push(this.name);
        alert("Cliente " + this.name + " cadastrado com sucesso")
        this.clearInputs();
      } else {
        alert("As senhas não são iguais. Por favor, verificá-las.")
      }
    } else {
      alert("Por favor, preencher todos os campos antes de efetuar o cadastro.");
    }
  }

  //TODO: Melhorar a validação, por ex: nome com mais de 3 caracters, cpf com número certo de numeros...
  isClientValide(): boolean {
    if (this.name == "" || this.cpf == "" || this.contact_number == "" || 
      this.email == "" || this.address == "" || this.password == "" || this.birthday == "" || this.password_confirm == "") {
        return false;
    } else {
      return true;
    }
  }

  arePasswordsEqual(): boolean {
    if (this.password == this.password_confirm) {
      return true;
    }
    return false;
  }

  clearInputs() {
    this.name = "";
    this.cpf = "";
    this.contact_number = "";
    this.email = "";
    this.address = "";
    this.password = "";
  }

}
