import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { ListComponent } from './views/list/list.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SalasComponent } from './views/salas/salas.component';
import { OpinionsComponent } from './views/opinions/opinions.component';

@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    HeaderComponent,
    FooterComponent,
    //ListComponent
    routingComponents,
    OpinionsComponent,
    //SalasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
