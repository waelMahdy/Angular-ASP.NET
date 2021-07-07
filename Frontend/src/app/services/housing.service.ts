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

  getAllProperties(sellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propsArray: Array<IProperty> = [];
        const dotjson = JSON.stringify(data);
        const not = JSON.parse(dotjson);

        for (const id in not) {
          if (not[id].SellRent === sellRent) {
            propsArray.push(not[id]);
          }
          if (sellRent === 3) {
            propsArray.push(not[id]);
          }
        }
        return propsArray;
      })
    );
  }
}
