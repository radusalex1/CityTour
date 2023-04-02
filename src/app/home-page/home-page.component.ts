import { Component } from '@angular/core';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  selectedCity :string | undefined;
  selectedCityImage: string = "/assets/backgroundImage.jpg";

  constructor(private cityService:CitiesService){}

  ngOnInit():void{
    if (this.cityService.selectedCity!!) {
      this.selectedCity = this.cityService.selectedCity.name;
      this.selectedCityImage = this.cityService.selectedCity.image;
    }
  }
}
