import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Project } from './project';
import { Tasker } from './tasker';

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
  dummyTaskers: Tasker[] = [
    {
      name: 'John Doe',
      slogan: 'Your Trusted Handyman',
      description:
        'Experienced in various home repair tasks. Customer satisfaction is my top priority!',
      rating: 95,
      img: 'john-doe.jpg', // Placeholder image filename
      skills: [
        { description: 'Plumbing', pricePerHour: 30 },
        { description: 'Electrical Repair', pricePerHour: 35 },
        { description: 'Carpentry', pricePerHour: 25 },
      ],
      completedTaskNumber: 120,
    },
    {
      name: 'Jane Smith',
      slogan: 'Expert Painter',
      description:
        'Transforming spaces with a brush and creativity. Bringing colors to life!',
      rating: 88,
      img: 'jane-smith.jpg', // Placeholder image filename
      skills: [
        { description: 'Interior Painting', pricePerHour: 40 },
        { description: 'Exterior Painting', pricePerHour: 45 },
      ],
      completedTaskNumber: 80,
    },
    {
      name: 'Mike Johnson',
      slogan: 'Your Friendly IT Guy',
      description:
        'Solving tech issues with a smile. From troubleshooting to setting up networks!',
      rating: 78,
      img: 'mike-johnson.jpg', // Placeholder image filename
      skills: [
        { description: 'Computer Repair', pricePerHour: 40 },
        { description: 'Network Setup', pricePerHour: 35 },
      ],
      completedTaskNumber: 60,
    },
    {
      name: 'Emily Davis',
      slogan: 'Master Gardener',
      description:
        'Passionate about plants and landscapes. Turning gardens into works of art!',
      rating: 92,
      img: 'emily-davis.jpg', // Placeholder image filename
      skills: [
        { description: 'Landscaping', pricePerHour: 30 },
        { description: 'Plant Care', pricePerHour: 25 },
      ],
      completedTaskNumber: 100,
    },
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
