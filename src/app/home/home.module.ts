import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    TopBarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
