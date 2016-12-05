import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  bucketsArray: string[];
  constructor() { 
    this.bucketsArray = ['Very Dissatisfied', 'Dissatisfied', 'No Opinion', 'Satisfied', 'Very Satisfied']
   }

  ngOnInit() {
  }

}
