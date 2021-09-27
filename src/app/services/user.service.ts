import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { IUserDTO } from '../interfaces/userDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  mapUserToUserDTO(user: IUser): IUserDTO {
    const userDTO: IUserDTO = {
      id: user.id || null,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      countryId: user.country?.id || null,
    }
    return userDTO;
  }
}
