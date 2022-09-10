import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { catchError, Observable, of, delay } from 'rxjs';
import { ToDoList } from '../Interfaces/ToDoApiInterface';
import { ToDoMockupData } from '../DbMockup/Content';

@Injectable({
  providedIn: 'root'
})
export class BasicCrudService {

  ToDoCollection = new ToDoMockupData();

  constructor(private http:HttpClient) { }

  getFakeData():Observable<ToDoList[]>{
    //mocking the call
    return of(this.ToDoCollection.getData())
    .pipe(
      delay(1000)
    );

    //actual API call
    return this.http.get<ToDoList[]>('https://jsonplaceholder.typicode.com/users/1/todos')
    .pipe(
      catchError(
        this.handleError('getting To Do List',[])
        )
    );
  }

  addAToDo(newToDo:ToDoList):Observable<any>{

    //mocking the call
    return of(this.ToDoCollection.addData(newToDo))
    .pipe(delay(1000));

    //actual API call
    return this.http.post('https://jsonplaceholder.typicode.com/users',
    newToDo).pipe(
      catchError(
        this.handleError('creating new To Do',false)
        )
    );
  }

  updateAToDo(existingToDo:ToDoList):Observable<any>{
    //mocking the call
    return of(this.ToDoCollection.updateData(existingToDo))
    .pipe(delay(1000));

    //actual API call
    return this.http.put('https://jsonplaceholder.typicode.com/users/'+existingToDo.id,
    existingToDo).pipe(
      catchError(
        this.handleError('updating existing To Do',false)
        )
    );
  }

  deleteAToDo(existingToDo:ToDoList):Observable<any>{
    //mocking the call
    return of(this.ToDoCollection.deleteData(existingToDo))
    .pipe(delay(1000));

    //actual API call
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+existingToDo.id
    ).pipe(
      catchError(
        this.handleError('deleting existing To Do',false)
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

