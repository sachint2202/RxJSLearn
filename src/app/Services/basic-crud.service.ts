import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoList } from '../Interfaces/ToDoApiInterface';

@Injectable({
  providedIn: 'root'
})
export class BasicCrudService {

  constructor(private http:HttpClient) { }

  getFakeData():Observable<ToDoList[]>{
    return this.http.get<ToDoList[]>('https://jsonplaceholder.typicode.com/users/1/todos');
  }
}

