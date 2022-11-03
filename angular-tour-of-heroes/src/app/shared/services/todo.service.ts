import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, Observable, of, tap } from 'rxjs';
import { ToDo } from '../../tasks/models/toDo.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    ) {}

  private toDosUrl = 'api/toDos';

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  getToDos(): Promise<ToDo[]> {
    // return this.http.get<ToDo[]>(this.toDosUrl)
    //   .pipe(
    //     tap(_ => this.log('fetched To-Dos')),
    //     catchError(this.handleError<ToDo[]>('getToDos', []))
    //   );
    return firstValueFrom(this.http.get<ToDo[]>(this.toDosUrl)
    .pipe(
      tap(_ => this.log('fetched To-Dos')),
      catchError(this.handleError<ToDo[]>('getToDos', []))))
  }
}
