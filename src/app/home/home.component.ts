import { FlexLayoutModule } from '@angular/flex-layout';

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
import { Tasker } from '../Interfaces/tasker';

import { JobsSearchBarComponent } from './jobs-search-bar/jobs-search-bar.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import { TakersCardComponent } from './takers-card/takers-card.component';
import { CitiesSearchBarComponent } from './cities-search-bar/cities-search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { Occupation } from '../Interfaces/occupation';
import { City } from '../Interfaces/city';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    JobsSearchBarComponent,
    ProjectsCardComponent,
    TakersCardComponent,
    CitiesSearchBarComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  options: string[] = Object.values(Occupation);

  cities: string[] = Object.values(City);

  projects: Project[] = [
    {
      title: 'Plumbing Upgrade',
      src: 'aouzal.jpeg',
      min: 100,
      max: 200,
    },
    {
      title: 'Electrical Renovation',
      src: 'path/to/image2.jpg',
      min: 150,
      max: 250,
    },
    { title: 'Deep Cleaning', src: 'path/to/image3.jpg', min: 120, max: 180 },
    {
      title: 'New Construction',
      src: 'path/to/image4.jpg',
      min: 200,
      max: 300,
    },
    {
      title: 'Apartment Cleaning',
      src: 'path/to/image5.jpg',
      min: 80,
      max: 150,
    },
    { title: 'Office Upgrade', src: 'path/to/image6.jpg', min: 170, max: 220 },
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
        { description: 'Plumbing' },
        { description: 'Electrical Repair' },
        { description: 'Carpentry' },
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
        { description: 'Computer Repair' },
        { description: 'Network Setup' },
        { description: 'Software Installation' },
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
        { description: 'Custom Furniture' },
        { description: 'Wood Carving' },
        { description: 'Cabinet Making' },
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
        { description: 'Electrical Wiring' },
        { description: 'Lighting Installation' },
        { description: 'Appliance Repair' },
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
}
