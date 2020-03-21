import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'API_KEY';
  API_URL = 'https://d8c444e7.ngrok.io/';
  constructor(public httpClient: HttpClient) { }
}
