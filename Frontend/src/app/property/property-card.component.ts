import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { IProperty } from './IPropert.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css'],
})
export class PropertyCardcomponent {
  @Input()
  Property: IProperty;
}
