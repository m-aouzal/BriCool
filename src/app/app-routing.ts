import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SellerSignUpComponent } from './sign-up/seller-sign-up/seller-sign-up.component';
import { ClientSignUpComponent } from './sign-up/client-sign-up/client-sign-up.component';
import {ProfileComponent} from "./profile/profile.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent },
  { path: 'profile', component: ProfileComponent },//using interface seller person create profile component using boostrap 5 using static data
  {
    path: 'signUp',
    component: SignUpComponent,
    children: [
      { path: 'seller', component: SellerSignUpComponent },
      { path: 'client', component: ClientSignUpComponent },
    ],
  },
  { path: '**', redirectTo: '404' },
];
