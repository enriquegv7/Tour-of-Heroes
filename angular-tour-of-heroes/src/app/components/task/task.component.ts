import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { userType, userTypeNames } from 'src/app/constants/user.constants';
import { ToDo } from 'src/app/models/toDo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  userType = userType;
  userTypeNames = userTypeNames;
  toDos: ToDo[] = []

  @Input() userId: number | undefined;
  @Input() id: number | undefined;
  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
