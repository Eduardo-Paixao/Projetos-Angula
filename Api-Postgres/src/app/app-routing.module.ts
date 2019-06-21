import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { AtualizarComponent } from './atualizar/atualizar.component';

const routes: Routes = [
  {path: '', component: ListaProdutosComponent},
  {path: 'novo', component: CadastroProdutoComponent},
  {path: 'atualizar', component: AtualizarComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
