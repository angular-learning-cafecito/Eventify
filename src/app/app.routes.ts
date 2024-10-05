import { Routes } from '@angular/router';
import {NotFoundPageComponent} from './public/pages/not-found-page/not-found-page.component';
import {HomeViewComponent} from './public/pages/home-view/home-view.component';
import {RatingViewComponent} from './event-management/pages/rating-view/rating-view.component';

export const routes: Routes = [
  {path:'home',component:HomeViewComponent},
  {path:'engagement/ratings/new' , component: RatingViewComponent},
  { path: '**', component: NotFoundPageComponent }
];
