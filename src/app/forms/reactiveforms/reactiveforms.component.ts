

import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.scss'
})
export class ReactiveformsComponent {

  // Store multiple form submissions
  formValues: any[] = [];

  studentForm: FormGroup = new FormGroup({
    FirstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    LastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Age: new FormControl(""),
    Address: new FormControl(""),
    Email: new FormControl("", [Validators.required, Validators.email]),
    Password: new FormControl("", [Validators.required, Validators.minLength(8)])
  });

  onsubmit() {
    if (this.studentForm.valid) {
      // Push form data into array
      this.formValues.push(this.studentForm.value);
      // Reset form after submission
      this.studentForm.reset();
    }
  }
}
