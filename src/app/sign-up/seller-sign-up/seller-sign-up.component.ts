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
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { Seller } from 'src/app/Interfaces/seller';
import { UserService } from 'src/app/Services/user.service';
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.cities = Object.values(City);
    this.options = Object.values(Occupation);
    this.filteredOptions = this.options.slice();
    this.filteredCities = this.cities.slice();

    this.personForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      city: [
        '',
        [Validators.required, this.isInCityListValidator(this.cities)],
      ],
      gender: [
        "",
        [
          Validators.required,
        ],
      ],
      Occupation: [
        '',
        [Validators.required, this.isInOccupationListValidator(this.options)],
      ],
      YearsOfBirth: ['', [Validators.required, this.ageValidator()]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordVerification: [
        '',
        Validators.required,
        this.matchPasswordValidator('password'),
      ],
    });
  }

  onSubmit() {
    if (this.personForm.valid) {
      const sellerData: Seller = {
        firstName: this.personForm.value.firstName,
        lastName: this.personForm.value.lastName,
        email: this.personForm.value.email,
        phoneNumber: this.personForm.value.phoneNumber,
        city: this.personForm.value.city,
        occupations: [this.personForm.value.Occupation],
        yearsOfBirth:  this.personForm.value.YearsOfBirth,
        password: this.personForm.value.password,
        gender: this.personForm.value.Gender,
      }
      console.log(sellerData);
      // Call the postSeller method from the service
      this.userService.postSeller(sellerData).subscribe(
        (result) => {
          console.log('Seller added successfully:', result);
          //this.router.navigate(['/profile']);
          // Handle success, such as redirecting to another page
        },
        (error) => {
          console.error('Error adding seller:', error);
          // Handle error, display a message, etc.
        }
      );
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

  ageValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const selectedDate: Date = control.value;

      // Check if a date is selected
      if (!selectedDate) {
        return { required: true };
      }

      // Calculate the age based on the current date
      const currentDate = new Date();
      const age = currentDate.getFullYear() - selectedDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const birthMonth = selectedDate.getMonth();
      const currentDay = currentDate.getDate();
      const birthDay = selectedDate.getDate();

      // Compare the age, taking into account months and days
      if (
        age > 18 ||
        (age === 18 &&
          (currentMonth > birthMonth ||
            (currentMonth === birthMonth && currentDay >= birthDay)))
      ) {
        return null; // No error, the user is 18 years or older
      } else {
        return { underage: true }; // Validation error, the user is younger than 18 years
      }
    };
  }

  isInCityListValidator(cities: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const city: string = control.value;

      if (!cities.includes(city) ) {
        return { notInCityList: true };
      }

      return null;
    };
  }

  isInOccupationListValidator(options: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const occupation: string = control.value;

      if (!options.includes(occupation) ) {
        return { notInOccupationList: true };
      }

      return null;
    };
  }
  matchPasswordValidator(controlName: string): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      const passwordControl = control.root.get(controlName);
      const password = passwordControl ? passwordControl.value : '';
      const confirmPassword = control.value;

      if (!password || !confirmPassword || password !== confirmPassword) {
        return Promise.resolve({ passwordMismatch: true });
      }

      return Promise.resolve(null);
    };
  }
}
