import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.scss'
})
export class GetAPIComponent {

    productList :any = []

  constructor(private http : HttpClient){}


  fetchAllUser(){
    this.http.get("https://fakestoreapi.com/products").subscribe((result) =>{
      this.productList = result;
    })
  }
}
