import { Component } from '@angular/core';
import { City } from 'src/app/models/city';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cities:City[] | undefined;

  constructor(private citiesService:CitiesService) { }

  ngOnInit(): void {
    this.cities = this.citiesService.getCities();
  }

  search(text:string)
  {
    this.cities = this.citiesService.filterCities(text);
  }
}
