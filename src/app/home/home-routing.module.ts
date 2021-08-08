import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {TopBarComponent} from "./top-bar/top-bar.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'top', component: TopBarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
