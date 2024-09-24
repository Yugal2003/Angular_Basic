import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentComponent,TeachersComponent,ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first_project';

  // age = 2;

  // name = "Yugal"


  // for if else 
  // ageBelow5(){
  //   this.age = 2
  // }
  // ageAbove5(){
  //   this.age = 7
  // }


  // for switch
  // nameChangeYugal(){
  //   this.name = 'Yugal'
  // }
  // nameChangeBhavik(){
  //   this.name = 'Bhavik'
  // }
  // nameChangeOm(){
  //   this.name = 'Om'
  // }

  // for loop

  // students:any[] = [
  //   {
  //     id:101,
  //     name : 'Yugal',
  //     age : 21
  //   },
  //   {
  //     id:102,
  //     name : 'Bhavik',
  //     age : 22
  //   },
  //   {
  //     id:103,
  //     name : 'Om',
  //     age : 21
  //   },
  //   {
  //     id:104,
  //     name : 'Rahul',
  //     age : 24
  //   },
  //   {
  //     id:105,
  //     name : 'Avinash',
  //     age : 25
  //   },
  // ]
}
