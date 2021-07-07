import { Component, OnInit } from '@angular/core';

import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IPropert.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  Properties: Array<IProperty> = [];
  constructor(private hpusingService: HousingService) {}

  ngOnInit(): void {
    this.hpusingService.getAllProperties().subscribe(
      (data) => {
        this.Properties = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
