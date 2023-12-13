import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { City } from 'src/app/Interfaces/city';
import { Occupation } from 'src/app/Interfaces/occupation';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-seller-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './seller-sign-up.component.html',
  styleUrls: ['./seller-sign-up.component.css'],
})
export class SellerSignUpComponent {
  cities: string[] = [];
  @ViewChild('CitiesInput') citiesInput: ElementRef<HTMLInputElement>;
  @ViewChild('OptionsInput') optionsInput: ElementRef<HTMLInputElement>;
  options: string[] = [];

  personForm: FormGroup;
  count: number = 1;
  filteredOptions: string[];
  filteredCities: string[];

  constructor(private fb: FormBuilder, private router: Router) {
    this.cities = Object.values(City);
    this.options = Object.values(Occupation);
    this.filteredOptions = this.options.slice();
    this.filteredCities = this.cities.slice();

    this.personForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      city: ['', Validators.required],
      Occupation: ['', Validators.required],
      YearsOfBirth: ['', Validators.required],
      passwordVerification: ['', Validators.required],
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

  filterCities(): void {
    const filterValue = this.citiesInput.nativeElement.value.toLowerCase();
    this.filteredCities = this.cities.filter((o) =>
      o.toLowerCase().includes(filterValue)
    );
  }
  filterOptions(): void {
    const filterValue = this.optionsInput.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter((o) =>
      o.toLowerCase().includes(filterValue)
    );
  }
}
