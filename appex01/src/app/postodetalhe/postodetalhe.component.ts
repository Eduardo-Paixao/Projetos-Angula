import { Component, OnInit } from '@angular/core';
import { Posto } from '../posto';
import { PostoService } from '../posto.service';

@Component({
  selector: 'app-postodetalhe',
  templateUrl: './postodetalhe.component.html',
  styleUrls: ['./postodetalhe.component.css']
})
export class PostodetalheComponent implements OnInit {

  posto: Posto = new Posto(0,"");

  constructor(private postoService: PostoService) { }

  enviarDados(){
    alert('Cadastro realizado');
    this.postoService.cadastrarPosto(this.posto)
    .subscribe(retorno => console.log(retorno),
               erro => console.log('Erro no cadastro'));
  }
  ngOnInit() {
  }


}
