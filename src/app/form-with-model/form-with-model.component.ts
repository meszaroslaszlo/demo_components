import { Component, OnInit } from '@angular/core';
import { Gender } from '../enums/gender.enum';
import { ICountry } from '../interfaces/country.interface';
import { IUser } from '../interfaces/user.interface';
import { IUserDTO } from '../interfaces/userDTO.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form-with-model',
  templateUrl: './form-with-model.component.html',
  styleUrls: ['./form-with-model.component.scss']
})
export class FormWithModelComponent implements OnInit {

  public myFirstuser: IUser = {};
  public gender = Gender;
  public countries: Array<ICountry> = [
    { id: '1', name: 'Albania' },
    { id: '2', name: 'Bulgaria' },
    { id: '3', name: 'Canada' },
    { id: '4', name: 'Brazil' },
    { id: '5', name: 'England' },
    { id: '6', name: 'Hungary' },
  ];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.myFirstuser = {};
  }

  onSubmit() {
    console.log(this.userService.mapUserToUserDTO(this.myFirstuser));
  }

  formIsValid(): boolean {
    if (this.emailIsValidwithRegex(this.myFirstuser?.lastName || '')
      && this.myFirstuser.firstName
      && Number(this.myFirstuser.gender) > -1
      && Number(this.myFirstuser.gender) < 3
      && Number(this.myFirstuser.age) > 1
      && Number(this.myFirstuser.age) < 110) {
      return true;
    }
    return false
  }

  private emailIsValidwithRegex(emailText: string): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailText).toLowerCase());
  }

}
