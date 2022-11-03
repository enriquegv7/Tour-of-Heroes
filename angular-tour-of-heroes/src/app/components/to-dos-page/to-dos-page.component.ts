import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/toDo.model';
import { TodoService } from 'src/app/services/todo.service';
import { userTypeNames, userType} from 'src/app/constants/user.constants';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos-page.component.html',
  styleUrls: ['./to-dos-page.component.scss']
})
export class ToDosComponent implements OnInit {

  userType = userType;
  userTypeNames = userTypeNames;
  toDos: ToDo[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getToDosPromise();
  }

  async getToDosPromise(): Promise<void> {
    this.toDos = await this.todoService.getToDos();
  }
}
