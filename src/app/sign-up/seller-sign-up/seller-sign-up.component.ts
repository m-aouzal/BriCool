import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-seller-sign-up',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './seller-sign-up.component.html',
  styleUrls: ['./seller-sign-up.component.css'],
})
export class SellerSignUpComponent {
  personForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
}
