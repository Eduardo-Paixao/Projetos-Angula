import { Component, OnInit } from '@angular/core';
import { Hospital } from "src/app/hospital";
import { HospitalService } from "src/app/hospital.service";

@Component({
  selector: 'app-formhospital',
  templateUrl: './formhospital.component.html',
  styleUrls: ['./formhospital.component.css']
})
export class FormhospitalComponent implements OnInit {

  hospital: Hospital = new Hospital(0,"","");

  constructor(private hospitalService: HospitalService) { }

  enviarDados(){
    alert('Cadastro realizado');
    this.hospitalService.cadastrarHospital(this.hospital)
    .subscribe(retorno => console.log(retorno),
               erro => console.log('Erro no cadastro'));
  }
  ngOnInit() {
  }

}