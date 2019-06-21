import { Component, OnInit } from '@angular/core';
import { Posto } from "src/app/posto";
import { PostoService } from "src/app/posto.service";

@Component({
  selector: 'app-listaposto',
  templateUrl: './listaposto.component.html',
  styleUrls: ['./listaposto.component.css']
})
export class ListapostoComponent  {

  posto : Object;

  constructor( private postoService :PostoService) { 
    this.postoService.getPosto()
     .subscribe( retorno => this.posto = retorno);
  }

  ngOnInit() {
  }

  excluirPosto(){
    this.postoService.excluirPosto(5)
    .subscribe( retorno => alert('Posto excluído com sucesso!'));
  }

}