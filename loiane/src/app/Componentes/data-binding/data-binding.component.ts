import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nome: string = 'abc';
  
  pessoa = {
    nome:'Eduardo',
    idade: '28'
  }

  isMouseOver: boolean = false;
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  valorSalvo: any;
  salvarValor(valor){
    this.valorSalvo = valor;
  }

  valorAtual: string = '';
  onKeyUp(evento: KeyboardEvent){
   this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  botaoClicado(){
    alert('Botão Clicado!');
  }

  constructor() { }

  ngOnInit() {
  }

}
