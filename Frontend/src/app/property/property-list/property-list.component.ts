import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IPropert.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  Properties: Array<IProperty> = [];
  SellRent = 3;
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString() == 'rent-property') {
      this.SellRent = 2;
    } else if (this.route.snapshot.url.toString() == 'buy-property') {
      this.SellRent = 1;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      (data) => {
        this.Properties = data;
        console.log(data);
        console.log(this.route.snapshot.url.toString() + ' ' + this.SellRent);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
