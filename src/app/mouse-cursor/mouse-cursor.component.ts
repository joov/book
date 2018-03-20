import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sse-wze-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent implements OnInit {

  clientX: number;
  clientY: number;

  constructor() { }

  onMousemove($event: MouseEvent) {
    this.clientX = $event.clientX;
    this.clientY = $event.clientY;
  }

  ngOnInit() {
  }

}
