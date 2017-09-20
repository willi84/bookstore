import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-position',
  templateUrl: './mouse-position.component.html',
  styleUrls: ['./mouse-position.component.css']
})
export class MousePositionComponent implements OnInit {

  public x: Number = 0;
  public y: Number = 0;

  constructor() { 
    //this.x = 0;
    //this.y= 0;
  }

  ngOnInit() {
  }

  public getPosition = function(event){
    this.x = event.x;
    this.y = event.y;
  }
}
