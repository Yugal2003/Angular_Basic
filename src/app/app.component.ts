import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
// import { ItemListComponent } from './item-list/item-list.component';

// class abc{
//   constructor(){
//     console.log("abc class called !!!");
//   }
// }




// <!-- app.components.ts file -->
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StructuralDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // viewProviders : [abc]
})
export class AppComponent {
  title = 'first_project';













  // constructor(private _abc:abc){
  //   console.log("Main Class Called !!!")
  // }

  // @HostListener('dblclick', ['$event'])
  //   save(){
  //     alert("Click On App Page !");
  //   }
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
