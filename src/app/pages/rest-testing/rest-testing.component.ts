import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../services/location.service';

@Component({
  selector: 'app-rest-testing',
  templateUrl: './rest-testing.component.html'
})
export class RestTestingComponent implements OnInit {
  users;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getUsers().subscribe((data) => (
      this.users = data
    ));
  }

}
