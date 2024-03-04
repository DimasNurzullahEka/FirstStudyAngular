import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocomplateComponent } from './component/autocomplate/autocomplate.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
    {path:'autocomplate',component:AutocomplateComponent},
    {path:'input',component:InputComponent},
    {path:'card',component:CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
