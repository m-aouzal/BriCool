import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Project } from './project';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  myControl = new FormControl('');
  options: string[] = [
    'Carpenter',
    'Electrician',
    'Painter',
    'Mechanic',
    'Chef',
    'Developer',
    'Designer',
    'Writer',
    'Doctor',
    'Teacher',
    'Plumber',
    'Engineer',
    'Artist',
    'Photographer',
    'Accountant',
    'Lawyer',
    'Nurse',
    'Architect',
    'Scientist',
    'Librarian',
    'Pilot',
    'Farmer',
    'Police Officer',
    'Firefighter',
    'Salesperson',
    'Barista',
    'Musician',
    'Athlete',
  ];
  projects: Project[] = [
    { title: 'Project 1', src: 'path/to/image1.jpg', min: 100, max: 200 },
    { title: 'Project 2', src: 'path/to/image2.jpg', min: 150, max: 250 },
    { title: 'Project 3', src: 'path/to/image3.jpg', min: 120, max: 180 },
    { title: 'Project 4', src: 'path/to/image4.jpg', min: 200, max: 300 },
    { title: 'Project 5', src: 'path/to/image5.jpg', min: 80, max: 150 },
    { title: 'Project 6', src: 'path/to/image6.jpg', min: 170, max: 220 },
  ];

  filteredOptions: string[];

  constructor() {
    this.filteredOptions = this.options.slice();
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter((o) =>
      o.toLowerCase().includes(filterValue)
    );
  }
}
