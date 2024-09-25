import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
    // @HostListener('click', ['$event'])
    // save(){
    //   alert("Click On Item Page !");
    // }
}
