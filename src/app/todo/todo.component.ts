import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  today: any;
  toDos: any;
  todosSub: any;

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {

    this.todoService.today.then((dateReceived: any) => {
      this.today = dateReceived;
    })

    this.todosSub = this.todoService.todosSubject.subscribe(
      (value) => {
        this.toDos = value;
      },
      (error) => {
        console.log('erreur:' + error);
      },
      () => {
        console.log('Observable complété');
      }
    );
    this.todoService.emettreToDos();
  }

  onChangeStatus(i: number) {
    this.todoService.onChangeStatus(i);
  }

  onModif(i: number) {
    this.todoService.onModif(i);
  }

  onView(id: number) {
    this.router.navigate(["single-todo", id]);
  }

  ngOnDestroy() {
    this.todosSub.unsubsribe ; // attention à l'écriture de unsubsribe !! si utilisation methode => ça bug ..!!
  }

}
