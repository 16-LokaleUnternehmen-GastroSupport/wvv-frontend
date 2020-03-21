import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'API_KEY';
  API_URL = 'https://jsonplaceholder.typicode.com/';
  constructor(public httpClient: HttpClient) { }
}
