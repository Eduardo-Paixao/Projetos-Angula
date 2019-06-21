import { Component, OnInit, Input } from '@angular/core';
import { Hospital } from "src/app/hospital";
import { HospitalService } from "src/app/hospital.service";

@Component({
  selector: 'app-listahospital',
  templateUrl: './listahospital.component.html',
  styleUrls: ['./listahospital.component.css']
})
export class ListahospitalComponent implements OnInit {

  hospitais : Object;

  constructor( private hospitalService : HospitalService) { 
    this.hospitalService.getHospitais2()
     .subscribe( retorno => this.hospitais = retorno);
  }

  ngOnInit() {
  }

  excluirHospital(){
    this.hospitalService.excluirHospital(5)
    .subscribe( retorno => alert('Hospital excluído com sucesso!'));
  }

}
