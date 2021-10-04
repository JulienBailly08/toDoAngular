import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  today: Date | undefined;
  toDos: { todoName: string; todoStatus: boolean; image: string; isModif: boolean; }[] = [];

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.today = this.todoService.today;
    this.toDos = this.todoService.toDos;
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
