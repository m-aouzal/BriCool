import { Client } from './client';
import { Occupation } from './occupation';
import { Gender } from './gender';
import { Photo } from './Photo';
import { Ville } from './Ville';
import { Project } from './Project';

export interface Seller {
  sellerId?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  yearsOfBirth: Date;
  gender: Gender;
  cin?: string;
  businessHours?: string;
  Operationalregion?: string;
  city: string;
  slogan?: string;
  description?: string;
  rating?: number;
  completedTaskNumber?: number;
  photoDeProfil?: string;
  occupations: Occupation[];
  projects?: Project[];
  yearsOfExperience?: number;
}
