import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signuplogin',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signuplogin.component.html',
  styleUrls: ['./signuplogin.component.css'],
})
export class SignUpLoginComponent {
  isSignUpSelected: boolean = true;

  constructor(private router: Router) {}

  signUp() {
    this.router.navigate(['/signUp']);
  }

  login() {
    this.router.navigate(['/home']);
    // TODO: Implement navigateLogin method
    // this.router.navigate(['/login']);
  }


}



  
