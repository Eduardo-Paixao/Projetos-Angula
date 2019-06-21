import { Component, OnInit } from '@angular/core';
import { AcudesService } from '../acudes.service';

@Component({
  selector: 'app-acudes',
  templateUrl: './acudes.component.html',
  styleUrls: ['./acudes.component.css']
})
export class AcudesComponent implements OnInit {

    
  acudes : Object;

  constructor( private acudesService :AcudesService) { 
    this.acudesService.getAcudes()
     .subscribe( retorno => this.acudes = retorno);
  }

  ngOnInit() {
  }

}
