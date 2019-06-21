import { Component, OnInit } from '@angular/core';
import { Produto } from "src/app/produto";
import { ProdutoService } from "src/app/produto.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

 produtos : Produto[] = Array();

  constructor( private produtoService : ProdutoService,
               private router : Router) { 
    this.obterProdutos();
  }

  ngOnInit() {
  }

  obterProdutos(){
    console.log('teste');
    this.produtoService.getProdutos()
    .subscribe( resposta => {
      console.log('ok');
      this.produtos = resposta;
    })
  }

  excluirProduto(id:number){

    alert('Você esta excluindo o produto de ID: ' + id);
    var confirma = confirm('Deseja excluir o produto ' + id + '?' );
    if (confirma) {
      this.produtoService.deleteProdutoByID(id)
      .subscribe( resposta => {
          console.log('Produto excluído com sucesso!');
          this.obterProdutos();
        });
    }
  }

  alterarProduto(id:number){
    this.router.navigate(['/atualizar']);
  }

  cadastrarProduto(){
    this.router.navigate(['/novo']);
  }

}
