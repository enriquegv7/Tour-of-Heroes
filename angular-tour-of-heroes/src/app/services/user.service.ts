import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(url);
  }

  // getUsersPromise(): Promise<User[]> {
  //   const url = 'https://jsonplaceholder.typicode.com/users';
  //   return this.http.get<User[]>(url).toPromise();
  // }

  // getUsersPromiseAsync(): Promise<User[]> {
  //   const url = 'https://jsonplaceholder.typicode.com/users';
  //   return this.http.get<User[]>(url).toPromise();
  // }
}

