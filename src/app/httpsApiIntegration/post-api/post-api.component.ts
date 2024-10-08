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

  editingProductId: string | null = null; // Variable to track the product being edited

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDepartment(); // Fetch existing products on load
  }

  // Method to save new product (POST request)
  onAdd() {
    this.http.post("https://fakestoreapi.com/products", this.productObj).subscribe((res: any) => {
      if (res) {
        // Push a deep copy of productObj to productData to avoid data binding issues
        this.productData.push({ ...res });
        // Clear form fields
        this.clearForm();
        alert("Product added successfully!");
      } else {
        alert("Failed to add product");
      }
    });
  }

  // When user clicks on "Edit", populate the form with the product data
  onEdit(product: any) {
    this.productObj = { ...product }; // Copy product data to form
    this.editingProductId = product.id; // Track the product being edited
  }

  // When user clicks "Update", update the product
  onUpdate() {
    // Find the product in productData and update it
    const index = this.productData.findIndex((product: any) => product.id === this.productObj.id);
    console.log(index);
    
    if (index !== -1) {
      // Send the PUT request to update the product on the server
      this.http.put(`https://fakestoreapi.com/products/${this.productObj.id}`, this.productObj).subscribe((res: any) => {
        if (res) {
          // Update the product in the productData array
          this.productData[index] = { ...this.productObj };
          
          alert("Product updated successfully!");
          
          // Clear the form and reset the editing state
          this.clearForm();
          this.editingProductId = null;
        } else {
          alert("Failed to update product");
        }
      });
    }
  } 

  // Method to delete a product
  onDelete(id: any) {
    const confirmation = confirm("Are you sure you want to delete this product?");
    if (confirmation) {
      this.http.delete(`https://fakestoreapi.com/products/${id}`).subscribe((res) => {
        if (res) {
          alert("Product deleted successfully!");
          // Remove the deleted product from productData
          this.productData = this.productData.filter((product: any) => product.id !== id);
        } else {
          alert("Failed to delete product");
        }
      });
    }
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