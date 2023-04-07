import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-popular-city',
  templateUrl: './popular-city.component.html',
  styleUrls: ['./popular-city.component.scss']
})
export class PopularCityComponent {
  @Input() cities:City[] | undefined;

  constructor(private citiesService : CitiesService, private router: Router) { }

  ngOnInit(): void {
  }


  citySelected(city:City)
  {
    this.citiesService.selectCity(city);
    this.router.navigate(['/']);
  }
}
