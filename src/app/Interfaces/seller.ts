import { Gender } from './gender';
import { Occupation } from './occupation';
import { Image } from './image';
import { Person } from './person';
import {Project} from "../home/project";

export interface Seller extends Person {
  occupations: Occupation[];
  dateOfBirth: Date;
  yearsOfExperience?: number;
  city: string;
  gender: Gender;
  CIN: string;
  image: Image;
  projects: Project[];//add project as interface instead of string
  businessHours: string;
  regionalOperations: string;
}
