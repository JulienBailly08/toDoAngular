import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {

  todo: any;
  error!: string;

  constructor( private route:ActivatedRoute, private todoservice:TodoService){ }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; // permet de récupérer le parametre injecter dans l'url via le routing
    //id est un string lors de sa récup or on doit utiliser un integer => mettre '+' devant pour modif format
    this.todo = this.todoservice.getTodo(+id);
    if(!this.todo){
      this.error="identifiant incorrect";
    }

  }

}
