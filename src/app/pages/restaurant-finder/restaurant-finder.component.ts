import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {first} from 'rxjs/operators';
import {LocationService} from '../../services/location.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-restaurant-finder',
  templateUrl: './restaurant-finder.component.html'
})
export class RestaurantFinderComponent implements OnInit {
  currentzip: string;
  locations;
  private returnUrl: string;

  constructor(private locationService: LocationService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  getLocations(zip) {
    this.locationService.getLocationsByZip(zip).subscribe(res => {
      this.locations = res;
    });
  }

  ngOnInit() {
    if (!localStorage.getItem('currentUser')) {
      this.authService.login(environment.basicUser, environment.basicPassword).pipe(first())
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            console.log('Error:' + error);
          });
    }
    this.currentzip = this.route.snapshot.queryParamMap.get('zip');
    this.getLocations(this.currentzip);
  }

}
