import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
    
    items = ['financial item 1', 'tax info here'];
  
    constructor() { }
 

//   public getOperator(v: string) {
//     this.operator = v;
//   }
ngOnInit() {

}

}
