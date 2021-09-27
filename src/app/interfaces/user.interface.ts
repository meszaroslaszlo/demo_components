import { Gender } from "../enums/gender.enum";
import { ICountry } from "./country.interface";

export interface IUser {
  id?: string;
  firstName?: string;
  lastName?: string;
  gender?: Gender;
  country?: ICountry;
  age?: number;
}
