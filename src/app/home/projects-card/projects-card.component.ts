import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css'],
})
export class ProjectsCardComponent {
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
}
