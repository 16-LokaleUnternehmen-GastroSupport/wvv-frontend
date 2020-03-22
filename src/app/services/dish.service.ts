import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  constructor(private httpClient: HttpClient) {
  }

    public getDishesByLocationId(locationId: string) {
      return this.httpClient.get(`${environment.apiUrl}/dish?locationId=${locationId}`);
    }
}
