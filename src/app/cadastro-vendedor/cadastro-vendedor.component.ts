import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-vendedor',
  templateUrl: './cadastro-vendedor.component.html',
  styleUrls: ['./cadastro-vendedor.component.css']
})
export class CadastroVendedorComponent implements OnInit {

  name: string = "";
  cnpj: string = "";
  email: string = "";
  contact_number: string = "";
  address: string = "";
  password: string = "";
  password_confirm: string = "";

  sellers: string[] = []; //TODO: Criar um classe cliente para conter os dados

  constructor() { }

  ngOnInit(): void {
  }

  createSeller() {
    if (this.isSellerValide()) {
      //TODO: Chamada do back
      this.sellers.push(this.name);
      alert("Vendedor " + this.name + " cadastrado com sucesso")
      this.clearInputs();
    } else {
      alert("Por favor, preencher todos os campos antes de efetuar o cadastro");
    }
  }

  //TODO: Melhorar a validação, por ex: nome com mais de 3 caracters, cpf com número certo de numeros...
  isSellerValide(): boolean {
    if (this.name == "" || this.cnpj == "" || this.contact_number == "" || 
      this.email == "" || this.address == "" || this.password == "") {
        return false;
    } else {
      return true;
    }
  }

  clearInputs() {
    this.name = "";
    this.cnpj = "";
    this.contact_number = "";
    this.email = "";
    this.address = "";
    this.password = "";
  }

  arePasswordsEqual(): boolean {
    if (this.password == this.password_confirm) {
      return true;
    }
    return false;
  }

}
