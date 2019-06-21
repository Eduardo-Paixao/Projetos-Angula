import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/app/home/home.component";
import { ListapostoComponent } from "src/app/listaposto/listaposto.component";
import { PostodetalheComponent } from "src/app/postodetalhe/postodetalhe.component";
import { SobreComponent } from "src/app/sobre/sobre.component";
import { ListahospitalComponent } from "src/app/listahospital/listahospital.component";
import { FormhospitalComponent } from './formhospital/formhospital.component';
import {FormspostoComponent} from './formsposto/formsposto.component';
import { AcudesComponent } from './acudes/acudes.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'lista', component : ListapostoComponent},
  {path : 'posto', component : PostodetalheComponent},
  {path : 'sobre', component : SobreComponent},
  {path : 'listaHospital', component : ListahospitalComponent},
  {path : 'novoHospital', component : FormhospitalComponent},
  {path : 'novoPosto', component : FormspostoComponent},
  {path : 'Açudes', component : AcudesComponent}


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
