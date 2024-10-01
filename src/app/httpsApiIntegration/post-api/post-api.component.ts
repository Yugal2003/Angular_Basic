import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.scss']
})
export class PostAPIComponent implements OnInit {

  productData: any = []; // To hold fetched products

  // Object to hold product data from the form
  productObj = {
    id: "",
    title: "",
    price: "",
    description: "",
    category: ""
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDepartment(); // Fetch existing products on load
  }

  // Method to save new product (POST request)
  onSave() {
    this.http.post("https://fakestoreapi.com/products", this.productObj).subscribe((res: any) => {
      if (res) {
        alert("Product added successfully!");

        // Push a deep copy of productObj to productData to avoid data binding issues
        this.productData.push({ ...this.productObj });

        // Clear form fields
        this.clearForm();
      } else {
        alert("Failed to add product");
      }
    });
  }

  onEdit(data:any){
    this.productObj = data
  }
  // Method to get all products (GET request)
  getDepartment() {
    this.http.get("https://fakestoreapi.com/products").subscribe((res: any) => {
      this.productData = res; // Save fetched products in productData
    });
  }

  // Clear the form after submission
  clearForm() {
    this.productObj = {
      id: "",
      title: "",
      price: "",
      description: "",
      category: ""
    };
  }
}