import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { ToDoList } from '../Interfaces/ToDoApiInterface';

@Injectable({
  providedIn: 'root'
})
export class BasicCrudService {

  constructor(private http:HttpClient) { }

  getFakeData():Observable<ToDoList[]>{
    return this.http.get<ToDoList[]>('https://jsonplaceholder.typicode.com/users/1/todos')
    .pipe(
      catchError(
        this.handleError('getting To Do List',[])
        )
    );
  }

  addAToDo(newToDo:ToDoList):Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/users',
    newToDo).pipe(
      catchError(
        this.handleError('creating new To Do',false)
        )
    );
  }

  updateAToDo(existingToDo:ToDoList):Observable<any>{
    return this.http.put('https://jsonplaceholder.typicode.com/users/'+existingToDo.id,
    existingToDo).pipe(
      catchError(
        this.handleError('updating existing To Do',false)
        )
    );
  }

  private handleError<T>(operation:string,defaultResult:T){
    return ():Observable<T> =>{
      console.log('Error in operation - ',operation);
      return of(defaultResult as T);
    }
   
  }
}

