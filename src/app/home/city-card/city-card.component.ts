import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  @Input() city:City | undefined;
  @Output() citySelected:EventEmitter<City> = new EventEmitter<City>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCity()
  {
    this.citySelected.emit(this.city);
  }

}
