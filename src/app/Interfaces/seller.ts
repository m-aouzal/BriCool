import { Client } from './client';
import { Occupation } from './occupation';
import { Gender } from './gender';
import { Photo } from './Photo';
import { Ville } from './Ville';
import { Project } from './Project';

export interface Seller extends Client {
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
