import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // permet l'injection du service au niveau de l'ensemble de l'application => peut etre modifié pour injection dans module unique
})
export class TodoService {

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


  onChangeStatus(i:number){
    this.toDos[i].todoStatus = !this.toDos[i].todoStatus;
  }

  onModif(i:number){
    this.toDos[i].isModif = !this.toDos[i].isModif;
  }


}
