import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.scss'
})
export class StructuralDirectivesComponent {

  // isDivVisible:boolean = true;

  // isToggle(){
  //   this.isDivVisible = !this.isDivVisible
  // }

  // isValue1 : string = "";
  // isValue2 : string = "";
  
  cityArray:string[] = ['Pune','Surat','Bangalore'];
  
}
