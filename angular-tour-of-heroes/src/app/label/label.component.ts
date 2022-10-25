import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() text?: string;
  @Output() newName = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(text: string): void {
    this.newName.emit(text);
    this.text = text;
  }

}
