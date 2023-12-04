import { Gender } from './gender';
import { Occupation } from './occupation';
import { Image } from './Image';
import { Person } from './Person';

export interface Seller extends Person {
  occupations: Occupation[];
  dateOfBirth: Date;
  yearsOfExperience?: number;
  city: string;
  gender: Gender;
  CIN: string;
  image: Image;
  projet?: string;
  businessHours: string;
  regionalOperations: string;
}
