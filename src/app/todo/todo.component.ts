import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  toDoOne:string="Poulpe";
  toDos = [
    {
      todoName: 'projet 1',
      todoStatus: true,
      image:"http://placehold.it/150"
    },
    {
      todoName: 'projet 2',
      todoStatus: false,
      image:"http://placehold.it/150"
    },
    {
      todoName: 'projet 3',
      todoStatus: false,
      image:"http://placehold.it/150"
    },
    {
      todoName: 'projet 4',
      todoStatus: true,
      image:"http://placehold.it/150"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeStatus(i:number){
    this.toDos[i].todoStatus = !this.toDos[i].todoStatus;
  }

}
