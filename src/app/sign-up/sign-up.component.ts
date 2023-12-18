import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerSignUpComponent } from './seller-sign-up/seller-sign-up.component';
import { ClientSignUpComponent } from './client-sign-up/client-sign-up.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    SellerSignUpComponent,
    ClientSignUpComponent,
    RouterOutlet,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  // Set default to 'client' or 'seller'
}
