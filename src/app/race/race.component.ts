import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race', 
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
  ponies = [{ id: 1, color: 'green' }, { id: 2, color: 'orange' }];
  colors = ['green', 'orange', 'blue'];

  constructor() { }

  ngOnInit() {
  }

  check() {
    console.log('race component view checked');
  }

  changeColor() { 
    this.ponies[0].color = this.randomColor();
  }

  randomColor() {
    console.log(Math.random() * (this.colors.length - 1))
    return this.colors[Math.random() * (this.colors.length - 1)];
}
}