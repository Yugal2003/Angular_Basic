import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ItemComponent,RouterLink],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {

  items:any[] = new Array(2);
}
