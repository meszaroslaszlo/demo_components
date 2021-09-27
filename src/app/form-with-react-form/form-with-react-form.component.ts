import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Gender } from '../enums/gender.enum';
import { ICountry } from '../interfaces/country.interface';
import { IUser } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';
import { nameofFactory } from '../services/utils';
import { CustomValidator } from '../validators/custom-validator';


const USER = nameofFactory<IUser>();
@Component({
  selector: 'app-form-with-react-form',
  templateUrl: './form-with-react-form.component.html',
  styleUrls: ['./form-with-react-form.component.scss']
})
export class FormWithReactFormComponent implements OnInit {


  userFormGroup = new FormGroup({
    [USER('lastName')]: new FormControl('Default Lastname', [Validators.required]),
    [USER('firstName')]: new FormControl('Default FirstName', [Validators.required]),
    [USER('gender')]: new FormControl('', [Validators.required]),
    [USER('country')]: new FormControl(''),
    [USER('age')]: new FormControl('', [Validators.required,this.numberBetweenPrivate(1,100)]),
  });

  public myFirstuser: IUser = {lastName:'Default Lastname',};

  public gender = Gender;
  public countries: Array<ICountry> = [
    { id: '1', name: 'Albania' },
    { id: '2', name: 'Bulgaria' },
    { id: '3', name: 'Canada' },
    { id: '4', name: 'Brazil' },
    { id: '5', name: 'England' },
    { id: '6', name: 'Hungary' },
  ];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.userFormGroup.controls[USER('lastName')].setValue(this.myFirstuser.lastName);
  }

  onSubmit() {
    console.log(this.userService.mapUserToUserDTO(this.userFormGroup.getRawValue()));
  }


  private numberBetweenPrivate(min: number, max: number): ValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value as string;

      const isValidInteger = value.match(/^-{0,1}\d+$/);
      const intValue = parseInt(control.value, 10);
      const outOfRange = intValue > max || intValue < min;
      const isEmptyString = control.value.trim() === '';

      return (!isValidInteger || outOfRange) && !isEmptyString ? { 'nc_test_tesdgt': true } : null;
    }
  }



}
