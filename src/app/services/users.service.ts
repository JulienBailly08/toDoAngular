import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:User[]=[{
      firstname:'julien',
      lastname:'bailly',
      email:'breubit@laposte.net',
      address:{
        street:'2 montée du Mas du Castellet',
        city:'Beauvallon',
        state:'Drôme',
        zip:26800
      },
      description:'Lorem Ipsum Dolores sit Amer etc etc etc...',
      dateBirth:'08-03-1979'
  }];

  constructor() { }

  addUser(user:User):void{
    this.users.push(user);
  }
}
