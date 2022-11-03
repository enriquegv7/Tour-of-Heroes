import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { userType, userTypeNames } from 'src/app/tasks/constants/user.constants';
import { ToDo } from 'src/app/tasks/models/toDo.model';
import { TodoService } from 'src/app/shared/services/todo.service';

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
