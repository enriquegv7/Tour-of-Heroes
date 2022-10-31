import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/toDo.model';
import { TodoService } from 'src/app/services/todo.service';
import { userTypeNames } from 'src/app/constants/user.constants';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {

  userTypeNames = userTypeNames;
  toDos: ToDo[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getToDos();
  }

  getToDos(): void {
    this.todoService.getToDos().subscribe(toDos =>
      this.toDos = toDos);
      console.log(this.toDos)
  }
}
