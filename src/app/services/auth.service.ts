import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService{

  private _registerUrl = this.API_URL + 'register';
  private _loginUrl = this.API_URL + 'login';

}
