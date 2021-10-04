import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  today: any;
  toDos: any;

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {

    this.todoService.today.then((dateReceived: any)=>{
      this.today=dateReceived;
    })

    this.todoService.toDos
    .then((receiveDatas:any)=>{ //recuperation de la promesse et injection au sein de toDos attendu
      this.toDos=receiveDatas;
    })
    .catch((error: string)=>{
      console.log("Erreur: "+error);
    });
  }
  onChangeStatus(i:number){
    this.todoService.onChangeStatus(i);
  }

  onModif(i:number){
    this.todoService.onModif(i);
  }

  onView(id:number){
    this.router.navigate(["single-todo",id]);
  }



}
