import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root' // permet l'injection du service au niveau de l'ensemble de l'application => peut etre modifié pour injection dans module unique
})
export class TodoService {

  today: any;
  toDos!: Todo[];
  todosSubject = new Subject<Todo[]>();



  constructor(private httpClient:HttpClient) {

    this.today = Promise.resolve(new Date()); // reject non utilisé pour fonction plus simle à écrire

    this.getTodosFromServer();
  }

  addTodo(todo:Todo):void{
    this.toDos.unshift(todo);
    this.emettreToDos();
    this.saveTodosToServer();
  }

  emettreToDos():void{
    this.todosSubject.next(this.toDos);
  }


  onChangeStatus(i: number) {
    this.toDos[i].todoStatus = !this.toDos[i].todoStatus;
    this.emettreToDos();
    this.saveTodosToServer();
  }

  onModif(i: number) {
    this.toDos[i].isModif = !this.toDos[i].isModif;
    this.emettreToDos();
    this.saveTodosToServer();
  }

  getTodo(i: number) {
    if (this.toDos[i]) {
      return this.toDos[i];
    }
    return false;
  }

  saveTodosToServer():void{
    this.httpClient.put("https://todo-list-app-d1f13-default-rtdb.europe-west1.firebasedatabase.app/todos.json",this.toDos)
    .subscribe(
      ()=>{
        console.log("Ok pour envoie vers serveur");
      },
      (error)=>{
        console.log("Erreur d'upload :"+error);
      }
    )
  }

  getTodosFromServer(){
    this.httpClient.get<Todo[]>("https://todo-list-app-d1f13-default-rtdb.europe-west1.firebasedatabase.app/todos.json")
    .subscribe(
      (todoRecup: Todo[])=>{
        this.toDos = todoRecup;
        this.emettreToDos();
      },
      (error)=>{
        console.log("Erreur de récupération des données :"+error);
      },
      ()=>{
        console.log("Récupération des données terminées");
      }
    )
  }


}
