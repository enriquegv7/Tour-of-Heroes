import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ToDosComponent } from './components/to-dos-page/to-dos-page.component';
import { TaskComponent } from './components/task/task.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ToDosComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ]
})
export class TasksModule { }
