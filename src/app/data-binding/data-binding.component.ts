import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {


 //onclick event & onchange start -->
  
  greeting : string = "Welcome"
  name : string = "Yugal"
  date : Date = new Date();
  
  constructor(){
    
  }

  clickToChangeName(){
    this.name= "Hello"
  }

  //onclick event & onchange start -->
  

  //property binding start

  // name : string = "Yugal"
  // date : Date = new Date();
  // constructor(){
    
  // }

  //property binding end


  //interpolation start

// <!-- app.components.ts file -->
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,ItemComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
//   // viewProviders : [abc]
// })
// export class AppComponent {
//   title = 'first_project';



// name : string = "Yugal"
// date : Date = new Date();
// constructor(){
  
// }

//interpolation end

}


