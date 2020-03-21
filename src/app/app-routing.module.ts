import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {RestTestingComponent} from './pages/rest-testing/rest-testing.component';

const routes: Routes = [
  {path: 'landing', component: LandingPageComponent },
  {path: 'rest', component: RestTestingComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingPageComponent, RestTestingComponent]
