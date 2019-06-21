import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  novoProduto : Produto = new Produto (0,'',0,0);

  constructor(private produtoService : ProdutoService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Novo Produto: ');
    console.log(JSON.stringify(this.novoProduto));
    console.log(this.novoProduto);

    this.produtoService.cadastrarProduto(this.novoProduto)
        .subscribe( resposta => console.log('Produto cadastrado com sucesso!')
    );
  }

}
