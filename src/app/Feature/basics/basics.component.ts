import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  tabToDisplay: string = 'Promise';
  codeContent: string = 'ng serve';
  codeResult: string = 'Code ran successfully...';

  constructor() { }

  ngOnInit(): void {
  }

  callTabChange(tab: string){
    console.log(tab);
    this.tabToDisplay = tab;
  }

}
