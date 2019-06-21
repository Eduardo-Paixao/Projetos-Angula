import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { HttpClientModule } from "@angular/common/http";
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { AtualizarComponent } from './atualizar/atualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    CadastroProdutoComponent,
    AtualizarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
