import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  name: string = "";
  product_id: string = "";
  value: number = 0;
  isEditingProduct: boolean = false;

  products: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  createProduct() {
    if (this.isProductValid()) {
      //TODO: Chamada do back
      this.products.push(this.name);
      alert("Produto " + this.name + " cadastrado com sucesso")
      this.clearInputs()
    } else {
      alert("Por favor, preencher todos os campos antes de efetuar o cadastro");
    }
  }

  isProductValid(): boolean {
    if (this.name == "" || this.product_id == "" || this.value == 0) {
      return false
    }
    return true;
  }

  clearInputs() {
    this.name = "";
    this.product_id = "";
    this.value = 0;
  }

  toggleIsEditingProduct() {
    this.isEditingProduct = !this.isEditingProduct
  }

  updateProduct(atIndex: number, withName: string) {
    this.products[atIndex] = withName
  }

}
