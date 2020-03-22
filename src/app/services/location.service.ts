import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private httpClient: HttpClient) {
  }

    public getLocationsByZip(zip: string) {
      return this.httpClient.get(`${environment.apiUrl}/location/${zip}`);
    }
}
