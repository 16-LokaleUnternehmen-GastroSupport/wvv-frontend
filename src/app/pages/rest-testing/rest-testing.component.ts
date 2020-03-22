import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../services/location.service';
import {AuthService} from '../../services/auth.service';
import {environment} from '../../../environments/environment';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rest-testing',
  templateUrl: './rest-testing.component.html'
})
export class RestTestingComponent implements OnInit {
  locations;
  private returnUrl: string;

  constructor(private locationService: LocationService,
              private authService: AuthService,
              private router: Router) { }

  getLocations(zip) {
    this.locationService.getLocationsByZip(zip).subscribe(res => {
      this.locations = res;
    });
    console.log(this.locations);
  }

  loginNow() {
    this.authService.login(environment.basicUser, environment.basicPassword);
  }

  ngOnInit() {
    console.log('ngOninit_rest');
    if (!(localStorage.getItem('currentUser'))) {
    this.authService.login(environment.basicUser, environment.basicPassword).pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log('Error:' + error);
        });
    }
  }

}
