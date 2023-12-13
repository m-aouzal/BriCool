import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-seller-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './seller-sign-up.component.html',
  styleUrls: ['./seller-sign-up.component.css'],
})
export class SellerSignUpComponent {
  personForm: FormGroup;
  count: number = 1;

  constructor(private fb: FormBuilder, private router: Router) {
    this.personForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    // Handle form submission here
    if (this.personForm.valid) {
      console.log('Form submitted:', this.personForm.value);
      // You can send the form data to your backend or perform any other actions.
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

  onContinue() {
    this.count++;
  }
  onReturn() {
    this.count--;
  }

  navigateToHomePage() {
    this.router.navigate(['/home']);
  }
}
