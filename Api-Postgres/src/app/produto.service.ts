import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Produto } from "src/app/produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  url : string = 'http://localhost:3000/produtos'

  constructor( private http : HttpClient) { }

  public getProdutos(){
    console.log('Obtendo produtos ...');
    return this.http.get<Produto[]>(this.url);
  }

  public getProdutoByID(id:number){
    return this.http.get<Produto[]>(this.url + id);
  }

  public deleteProdutoByID(id:number){
    return this.http.delete(this.url + '/' + id);
  }

  public cadastrarProduto(novoProduto : Produto){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(this.url, novoProduto, httpOptions);
  }
}
