import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const saluation= new Observable((valeurRetour)=>{
      setTimeout(() => {
        valeurRetour.next("hello");
      }, 500);
      setTimeout(() => {
        valeurRetour.next("world !");
      }, 2000);
      setTimeout(() => {
        valeurRetour.next("etc, etc...");
      }, 3500);
      setTimeout(() => {
        valeurRetour.complete();
      }, 4000);
    });

    saluation.subscribe(
      (value)=>{
        console.log("value :"+value);
      },
      (error)=>{
        console.log("erreur :"+error);
      },
      ()=>{
        console.log("observable complété");
      },
    );
  }
}
