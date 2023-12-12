import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Seller} from '../Interfaces/seller';
import {Gender} from "../Interfaces/gender";
import {Occupation} from "../Interfaces/occupation";
import {Project} from "../home/project";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  m(){
    console.log('rff')
  }
  copyPhoneNumber(): void {
    // Create a temporary input element to copy the text
    const tempInput = document.createElement('input');
    tempInput.value = this.seller.phoneNumber;
    document.body.appendChild(tempInput);

    // Select and copy the text
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, provide feedback to the user (e.g., toast notification)
    // You can implement this using a library or your own custom solution
    alert('Phone number copied!'+this.seller.phoneNumber);
  }
  copyMail(): void {
    // Create a temporary input element to copy the text
    const tempInput = document.createElement('input');
    tempInput.value = this.seller.email;
    document.body.appendChild(tempInput);

    // Select and copy the text
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, provide feedback to the user (e.g., toast notification)
    // You can implement this using a library or your own custom solution
    alert('Mail copied!'+this.seller.email);
  }
  //@Input() seller: Seller;
  seller: Seller = {
    CIN: "AJ2261",
    businessHours: "6",
    city: "RABAT",
    dateOfBirth: undefined,
    email: "aymanbelhaj19@gmail.com",
    firstName: "Ayman",
    gender: Gender.Male,
    image: "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/483717698ConstructionLaborer.jpg=ws1280x960",
    lastName: "Belhaj",
    occupations: [Occupation.Carpenter, Occupation.Electrician],
    password: "*******",
    phoneNumber: "0611727669",
    projects:[
      {
        title: "J5 bricool",
        src : "https://orleanstech.wpenginepowered.com/wp-content/uploads/2022/08/OTC-Carp-1020x615-1.jpg",
        min:100,max:200
      },
      {
        title: "AMAL4 bricool",
        src : "https://trades.viu.ca/sites/default/files/carpentry-5.jpg",
        min:100,max:200
      },
      {
        title: "J5 electrician",
        src : "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        min:100,max:200
      }
    ],
    regionalOperations: "",
    yearsOfExperience: 5

  }

  protected readonly console = console;
}
