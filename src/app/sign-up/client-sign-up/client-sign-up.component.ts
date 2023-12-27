import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";
import {count} from "rxjs";

@Component({
  selector: 'app-client-sign-up',
  standalone: true,
  imports: [CommonModule, MatAutocompleteModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatOptionModule, ReactiveFormsModule],
  templateUrl: './client-sign-up.component.html',
  styleUrls: ['./client-sign-up.component.css']
})
export class ClientSignUpComponent {

  onSignUp() {
    console.log("yuyskdx")
  }

  onLogin() {
    console.log("kjdlf")
  }

  navigateToHomePage() {

  }

  protected readonly count = count;

  onSubmit() {

  }

  navigateToLogin() {

  }

  navigateToSignUp() {

  }
}
