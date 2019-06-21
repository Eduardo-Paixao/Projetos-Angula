import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Acudes } from './acudes';

@Injectable({
  providedIn: 'root'
})
export class AcudesService {

  constructor( private http : HttpClient) {
  }

  getAcudes(){
    return this.http.get<Acudes[]>("http://localhost:3000/acudes");
  }
}
