import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListapostoComponent } from './listaposto/listaposto.component';
import { PostodetalheComponent } from './postodetalhe/postodetalhe.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { PostoService } from "src/app/posto.service";
import { ListahospitalComponent } from './listahospital/listahospital.component';
import { HttpClientModule } from "@angular/common/http";
import { FormhospitalComponent } from './formhospital/formhospital.component';
import { FormspostoComponent } from './formsposto/formsposto.component';
import { AcudesComponent } from './acudes/acudes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListapostoComponent,
    PostodetalheComponent,
    SobreComponent,
    HomeComponent,
    ListahospitalComponent,
    FormhospitalComponent,
    FormspostoComponent,
    AcudesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PostoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
