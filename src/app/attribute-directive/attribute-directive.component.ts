import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.scss'
})
export class AttributeDirectiveComponent {


 // two or more color changes start-->

  // divColor : string = 'bg-black';
  // clickToChangeDivColorBlack(){
  //   this.divColor = 'bg-black';
  // }
  // clickToChangeDivColorRed(){
  //   this.divColor = 'bg-red-600';
  // }
  // clickToChangeDivColorBlue(){
  //   this.divColor = 'bg-blue-600';
  // }
  // clickToChangeDivColorYellow(){
  //   this.divColor = 'bg-yellow-600';
  // }

 // two or more color changes end-->


// <!-- toggle in ngclass start -->

// divColor : boolean = false;


// <!-- toggle in ngclass end -->
  

// when two input are same input or not start

firstInput : string = ''
secondInput : string = ''

// when two input are same input or not end
}
