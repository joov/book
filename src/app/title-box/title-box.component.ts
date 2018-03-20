import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookDataService } from '../book/book-data.service';


@Component({
  selector: 'sse-wze-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent {

  @Input() title: string;
  @Output() titleClicked = new EventEmitter<string>();

  constructor(private bookData: BookDataService) {  }

}
