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

    const nombresPairs = new Observable((observer)=>{
      let value =0;
      const interval = setInterval(()=>{
        if(value%2 ==0){
          observer.next(value);
        }
        value++;
      },500);
      return ()=>clearInterval(interval);
    });

    nombresPairs.subscribe(
      (value)=>{
        console.log("nombre pair :"+value);
      }
    );

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
