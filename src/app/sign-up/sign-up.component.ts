import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerSignUpComponent } from './seller-sign-up/seller-sign-up.component';
import { ClientSignUpComponent } from './client-sign-up/client-sign-up.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, SellerSignUpComponent, ClientSignUpComponent],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  userType: string = 'client'; // Set default to 'client' or 'seller'
}
