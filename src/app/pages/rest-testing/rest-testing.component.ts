import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../services/location.service';
import {AuthService} from '../../services/auth.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-rest-testing',
  templateUrl: './rest-testing.component.html'
})
export class RestTestingComponent implements OnInit {
  locations;

  constructor(private locationService: LocationService,
              private authService: AuthService) { }

  getLocations(zip) {
    console.log(this.locationService.getLocationsByZip(zip));
  }

  loginNow() {
    this.authService.login(environment.basicUser, environment.basicPassword);
  }

  ngOnInit() {
    console.log('ngOninit_rest');
    if (!(localStorage.getItem('currentUser'))) {
    this.authService.login(environment.basicUser, environment.basicPassword);
    }
  }

}
