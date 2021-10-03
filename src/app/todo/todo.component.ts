import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  today= new Date();

  toDos = [
    {
      todoName: 'projet 1',
      todoStatus: true,
      image:"http://placehold.it/150",
      isModif: false
    },
    {
      todoName: 'projet 2',
      todoStatus: false,
      image:"http://placehold.it/150",
      isModif: false
    },
    {
      todoName: 'projet 3',
      todoStatus: false,
      image:"http://placehold.it/150",
      isModif: false
    },
    {
      todoName: 'projet 4',
      todoStatus: true,
      image:"http://placehold.it/150",
      isModif: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeStatus(i:number){
    this.toDos[i].todoStatus = !this.toDos[i].todoStatus;
  }

  onModif(i:number){
    this.toDos[i].isModif = !this.toDos[i].isModif;
  }


}
