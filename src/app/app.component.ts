import { Component, OnInit, ViewChild } from '@angular/core';
import { VERSION } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent implements OnInit {

  version = VERSION;
  data: any[] = [];
  createItem(index: number, randomStatus) {
    return { id: index, name: `Item ${index}`, details: `Status: ${randomStatus}`, status : randomStatus };
  }
  createRandomItem() {
    const int = parseInt((Math.random() * 100) + '', 10);
    const randomStatus  = Math.random() >= 0.3 ? "normal" : "alarm";
    return this.createItem(int, randomStatus);
  } 
  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.data.push(this.createRandomItem());
    }
  } 

}