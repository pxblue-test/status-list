import { Component, OnInit, ViewChild } from '@angular/core';
import { VERSION } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  version = VERSION;
  data: any[] = [];
  createItem(index: number, random_boolean) {
    return { id: index, name: `Item ${index}`, details: `item ${index} details`,selected : random_boolean };
  }
  createRandomItem() {
    const int: number = parseInt((Math.random() * 100) + '', 10);
    const random_boolean  = Math.random() >= 0.5;
    return this.createItem(int, random_boolean);
  }
  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.data.push(this.createRandomItem());
    }
  } 

  
}
