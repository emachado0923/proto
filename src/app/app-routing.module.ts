import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterprinsipalComponent } from './components/footerprinsipal/footerprinsipal.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'pie',component:FooterprinsipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
