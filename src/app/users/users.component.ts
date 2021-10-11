import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy{

  constructor(private userService:UsersService) { }

  users:User[]=[];
  usersSubscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.usersSubscription = this.userService.usersSub.subscribe(
      (usersRecup:User[])=>{
        this.users = usersRecup;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy(){
    this.usersSubscription.unsubscribe;
  }

}
