import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  salutationSub:any;
  nombresPairsSub:any;
  valeurVersAffichage:any;
  helloWorldVersTemplate:any;

  constructor() { }

  ngOnInit(): void {
    const saluation = new Observable((valeurRetour) => {
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
        valeurRetour.next(":d");
      }, 5000);
      setTimeout(() => {
        valeurRetour.complete();
      }, 6000);
    });

    const nombresPairs = new Observable((observer) => {
      let value = 0;
      const interval = setInterval(() => {
        if (value % 2 == 0) {
          observer.next(value);
        }
        value++;
      }, 500);
      return () => clearInterval(interval);
    });

    this.nombresPairsSub = nombresPairs.subscribe(
      (value) => {
        console.log("nombre pair :" + value);
        this.valeurVersAffichage =value;
      }
    );

    this.salutationSub = saluation.subscribe(
      (value) => {
        console.log("value :" + value);
        this.helloWorldVersTemplate = value;
      },
      (error) => {
        console.log("erreur :" + error);
      },
      () => {
        console.log("observable complété");
      },
    );

  }
  ngOnDestroy(){
    this.salutationSub.unsubsribe();
    this.nombresPairsSub.unsubsribe();
  }
}



