import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { userType, userTypeNames } from 'src/app/constants/user.constants';
import { ToDo } from 'src/app/models/toDo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.scss']
})
export class ToDoTaskComponent implements OnInit {
  userType = userType;
  userTypeNames = userTypeNames;
  toDos: ToDo[] = []

  @Input() toDo: ToDo;

  constructor() { }

  ngOnInit(): void {
  }

}
