import { Injectable } from '@angular/core';
import { Posto } from "src/app/posto";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostoService {

  constructor( private http : HttpClient) {
  }

  getPosto(){
    return this.http.get<Posto[]>("http://localhost:3000/posto");
  }

  excluirPosto( id : number){
    return this.http.delete("http://localhost:3000/posto" + id);
  }
  
  cadastrarPosto(posto: Posto){
    console.log('teste');
    return this.http.post("http://localhost:3000/posto", posto);
  }
}
