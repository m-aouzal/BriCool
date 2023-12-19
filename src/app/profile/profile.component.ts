import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Seller } from '../Interfaces/seller';
import { Gender } from '../Interfaces/gender';
import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
} from '@angular/common/http';
import { Occupation } from '../Interfaces/occupation';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  seller: Seller[] = [
    {
      businessHours: '',
      cin: 'AJ2261',
      city: 'RABAT',
      completedTaskNumber: 0,
      description: 'CHI 7aja',
      gender: Gender.MALE,
      id: 0,
      occupations: [Occupation.ELECTRICITE, Occupation.MACONNERIE],
      password: '',
      photoDeProfil: '',
      rating: 0,
      slogan: '',
      firstName: 'ayman',
      lastName: 'belhaj',
      email: 'aymanbelhaj19@gmail.com',
      phoneNumber: '0611727669',
      projects: [null],
      yearsOfBirth: null,
    },
  ];

  m() {
    console.log('rff');
  }
  copyPhoneNumber(): void {
    // Create a temporary input element to copy the text
    const tempInput = document.createElement('input');
    tempInput.value = this.seller[0].phoneNumber;
    document.body.appendChild(tempInput);

    // Select and copy the text
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, provide feedback to the user (e.g., toast notification)
    // You can implement this using a library or your own custom solution
    alert('Phone number copied!' + this.seller[0].phoneNumber);
  }
  copyMail(): void {
    // Create a temporary input element to copy the text
    const tempInput = document.createElement('input');
    tempInput.value = this.seller[0].email;
    document.body.appendChild(tempInput);

    // Select and copy the text
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, provide feedback to the user (e.g., toast notification)
    // You can implement this using a library or your own custom solution
    alert('Mail copied!' + this.seller[0].email);
  }

  //input an image
  constructor(private http: HttpClient, private service: UserService) {}

  public getSeller(): void {
    this.service.getSeller().subscribe(
      (response: Seller[]) => {
        this.seller = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  ngOnInit() {
    this.getSeller();
  }

  // ... existing code ...

  onFileSelected(event: any): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Send the form data to the backend using an API endpoint
      this.uploadImage(formData);
    }
  }

  uploadImage(formData: FormData): void {
    // Replace 'your-api-endpoint' with the actual URL of your backend API endpoint
    const apiUrl = 'http://localhost:8080/upload';

    this.http.post(apiUrl, formData).subscribe(
      (response) => {
        // Handle the successful response from the backend
        console.log('Image uploaded successfully:', response);
      },
      (error) => {
        // Handle errors during the upload
        console.error('Error uploading image:', error);
      }
    );
  }
  //@Input() seller: Seller;

  protected readonly console = console;
}
