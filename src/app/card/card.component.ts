import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardsArray: string[];

  constructor() { 
    this.cardsArray = ['APPLE', 'GOOGLE', 'MICROSOFT', 'FACEBOOK'];
   }

  ngOnInit() {
  }

}
