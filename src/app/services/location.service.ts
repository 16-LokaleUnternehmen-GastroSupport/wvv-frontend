import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends ApiService{
    public getUsers() {
      return this.httpClient.get(this.API_URL + 'users');
    }
}
