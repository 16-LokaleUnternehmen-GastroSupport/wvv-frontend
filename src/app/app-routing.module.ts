import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {RestTestingComponent} from './pages/rest-testing/rest-testing.component';
import {RestaurantFinderComponent} from './pages/restaurant-finder/restaurant-finder.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'rest', component: RestTestingComponent },
  {path: 'finder', component: RestaurantFinderComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingPageComponent, RestTestingComponent, RestaurantFinderComponent]
