import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../services/location.service';
import {AuthService} from '../../services/auth.service';
import {environment} from '../../../environments/environment';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {DishService} from '../../services/dish.service';

@Component({
  selector: 'app-rest-testing',
  templateUrl: './rest-testing.component.html'
})
export class RestTestingComponent implements OnInit {
  locations;
  dishes;
  private returnUrl: string;

  constructor(private locationService: LocationService,
              private dishService: DishService,
              private authService: AuthService,
              private router: Router) { }

  getLocations(zip) {
    this.locationService.getLocationsByZip(zip).subscribe(res => {
      this.locations = res;
    });
  }

  getDishes(locationId) {
    this.dishService.getDishesByLocationId(locationId).subscribe(res => {
      this.dishes = res;
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
  }

}
