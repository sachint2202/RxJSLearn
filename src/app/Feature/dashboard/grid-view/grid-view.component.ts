import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
   this.crud.getFakeData().subscribe(x => this.ToDoData = x);
  }

}
