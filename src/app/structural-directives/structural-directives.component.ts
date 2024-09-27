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
  
  //  ngfor directives start
  cityArray:string[] = ['Pune','Surat','Bangalore'];

  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem(){
    this.items.push(`Item ${this.items.length + 1}`);
  }
  removeItem(){
    if(this.items.length > 0){
      this.items.pop();
    }
  }
  //  ngfor directives end
}
