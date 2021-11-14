import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {ListComponent } from './views/list/list.component';
import { MovieComponent } from './views/movie/movie.component';
import { SalasComponent } from './views/salas/salas.component';
import { OpinionsComponent } from './views/opinions/opinions.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'list', component:ListComponent},
  {path:'movie/:id', component:MovieComponent},
  {path:'salas', component:SalasComponent},
  {path:'opiniones', component:OpinionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,ListComponent,MovieComponent,SalasComponent,OpinionsComponent]
