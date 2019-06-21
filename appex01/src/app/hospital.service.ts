import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospital } from "src/app/hospital";

@Injectable({
  providedIn: 'root'
})
export class HospitalService {


  constructor( private http : HttpClient) {
  }

  getHospitais2(){
    return this.http.get<Hospital[]>("http://localhost:3000/hospitais");
  }

  excluirHospital( id : number){
    return this.http.delete("http://localhost:3000/hospitais/" + id);
  }
  
  cadastrarHospital(hospital: Hospital){
    console.log('teste');
    return this.http.post("http://localhost:3000/hospitais/", hospital);
  }
}
