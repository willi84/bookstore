import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {

  @Input() title: String = '';
  @Output() titleClickedEvent = new EventEmitter<string>()
  constructor() { 
  }

  ngOnInit() {
  }
  public sendPing = function(){
    this.titleClickedEvent.emit('Msg');
  }

}
