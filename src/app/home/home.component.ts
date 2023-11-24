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
import { MatDividerModule } from '@angular/material/divider';


import { JobsSearchBarComponent } from './jobs-search-bar/jobs-search-bar.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatDividerModule,
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
    JobsSearchBarComponent,
    ProjectsCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  @ViewChild('CitiesInput') citiesInput: ElementRef<HTMLInputElement>;
  
  myCitiesControl = new FormControl('');
  cities: string[] = [
    'Casablanca',
    'Rabat',
    'Marrakech',
    'Fes',
    'Tangier',
    'Agadir',
    'Meknes',
    'Oujda',
    'Kenitra',
    'Tetouan',
    'Safi',
    'Mohammedia',
    'Beni Mellal',
    'Khouribga',
    'Nador',
    // Add more cities as needed
  ];

 
 
  taskers: Tasker[] = [
    {
      name: 'Ali Mohamed',
      slogan: 'Your Trusted Handyman',
      description:
        'Experienced in various home repair tasks. Customer satisfaction is my top priority!',
      rating: 95,
      img: 'ali-mohamed.jpg', // Placeholder image filename
      skills: [
        { description: 'Plumbing', pricePerHour: 70 },
        { description: 'Electrical Repair', pricePerHour: 100 },
        { description: 'Carpentry', pricePerHour: 120 },
      ],
      completedTaskNumber: 120,
    },

    {
      name: 'Mohamed Jamal',
      slogan: 'Your Friendly IT Guy',
      description:
        'Solving tech issues with a smile. From troubleshooting to setting up networks!',
      rating: 78,
      img: 'aouzal.jpeg', // Placeholder image filename
      skills: [
        { description: 'Computer Repair', pricePerHour: 350 },
        { description: 'Network Setup', pricePerHour: 300 },
        { description: 'Software Installation', pricePerHour: 250 },
      ],
      completedTaskNumber: 60,
    },

    {
      name: 'Ahmed Khalid',
      slogan: 'Skilled Carpenter',
      description:
        'Crafting wood into beautiful creations. From furniture to intricate woodwork!',
      rating: 85,
      img: 'ahmed-khalid.jpg', // Placeholder image filename
      skills: [
        { description: 'Custom Furniture', pricePerHour: 60 },
        { description: 'Wood Carving', pricePerHour: 80 },
        { description: 'Cabinet Making', pricePerHour: 60 },
      ],
      completedTaskNumber: 90,
    },
    {
      name: 'Youssef Hassan',
      slogan: 'Professional Electrician',
      description:
        'Ensuring your electrical systems are safe and efficient. Handling installations and repairs!',
      rating: 91,
      img: 'sara-hassan.jpg', // Placeholder image filename
      skills: [
        { description: 'Electrical Wiring', pricePerHour: 80 },
        { description: 'Lighting Installation', pricePerHour: 90 },
        { description: 'Appliance Repair', pricePerHour: 120 },
      ],
      completedTaskNumber: 110,
    },
  ];

  offers: string[] = [
    'Handyman Services',
    'Help Moving',
    'Hire Painter',
    'Hire Plumber',
    'Furniture Movers',
    'Laundry Services',
    'TV Mounting',
    'House Cleaning',
  ];

 
  filteredCities: string[];

  constructor() {
    this.filteredCities = this.cities.slice();
  }

  
  filterCities(): void {
    const filterValue = this.citiesInput.nativeElement.value.toLowerCase();
    this.filteredCities = this.cities.filter((o) =>
      o.toLowerCase().includes(filterValue)
    );
  }
}
