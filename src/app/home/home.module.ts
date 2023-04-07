import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CityCardComponent } from './city-card/city-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationComponent } from './information/information.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { PopularCityComponent } from './popular-city/popular-city.component';


@NgModule({
  declarations: [
    CityCardComponent,
    DashboardComponent,
    InformationComponent,
    SearchComponent,
    PopularCityComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
