import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  secondeSub:any;
  valeurVersAffichage:any;


  constructor() { }

  ngOnInit(): void {

    const secondeObs = interval(1000);

    this.secondeSub = secondeObs.subscribe(
      (value) => {
        this.valeurVersAffichage =value;
      }
    );


  }
  ngOnDestroy(){

    this.secondeSub.unsubsribe();
  }
}



