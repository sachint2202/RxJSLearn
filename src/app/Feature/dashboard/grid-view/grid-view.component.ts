import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ToDoList } from 'src/app/Interfaces/ToDoApiInterface';
import { BasicCrudService } from 'src/app/Services/basic-crud.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  constructor(private crud:BasicCrudService) { }

  ToDoData:ToDoList[] = [];
  addAChore:boolean = false;
  newTitle = "";

  //Add a new ToDo to the list
  AddToList(){
    let newToDo:ToDoList = {
      userId:0,
      id:0,
      title:this.newTitle,
      completed:false
    }
    this.crud.addAToDo(newToDo).subscribe(
      (val)=> {
        if(val == false){
          alert('Please try to save again');
          return;
        }
        console.log('New chore added successfully')
        this.newTitle="";
        this.addAChore=false;
        this.ToDoData.push(val);
      },
      
    )
  }

  //Update an existing ToDo from the list
  UpdateToDo(existingToDo:ToDoList){
    this.crud.updateAToDo(existingToDo)
    .subscribe(
      (val) => {
        if(!val){
          alert('Please try to update again');
          return;
        }
        alert('Updated successfully');
        this.ToDoData.map(x => {if(x.id == val.id)x=val})
      }
    )

  }

  //Get Data Initially From Fake APIs
  ngOnInit(): void {
   this.crud.getFakeData().subscribe(x => this.ToDoData = x);
  }

}
