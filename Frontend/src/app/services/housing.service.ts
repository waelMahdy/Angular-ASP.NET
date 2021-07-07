import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IPropert.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties(): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propsArray: Array<IProperty> = [];
        const dotjson = JSON.stringify(data);
        const not = JSON.parse(dotjson);
        for (const id in not) {
          propsArray.push(not[id]);
        }
        return propsArray;
      })
    );
  }
}
