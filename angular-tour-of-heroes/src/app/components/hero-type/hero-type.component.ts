import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { heroTypeNames } from 'src/app/constants/hero.constants';

@Component({
  selector: 'app-hero-type',
  templateUrl: './hero-type.component.html',
  styleUrls: ['./hero-type.component.scss']
})
export class HeroTypeComponent implements OnInit {
  heroTypeNames = heroTypeNames;

  @Input() typeId: number | undefined;
  @Output() typeIdChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  // onChangeTypeId(typeId: number): void {
  //   this.typeIdChange.emit(typeId);
  // }

}
