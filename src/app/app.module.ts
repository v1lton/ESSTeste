import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import {FormsModule} from '@angular/forms';
import { CadastroVendedorComponent } from './cadastro-vendedor/cadastro-vendedor.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LoginVendedorComponent } from './login-vendedor/login-vendedor.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { BuscaProdutoComponent } from './busca-produto/busca-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    CadastroVendedorComponent,
    LoginClienteComponent,
    LoginVendedorComponent,
    CadastroProdutoComponent,
    BuscaProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
