import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.scss'
})
export class TemplateFormsComponent {
  user = {
    firstname: '',
    lastname: '',
    age: null,
    address: '',
    city: '',
    gender: ''
  };

  cities: string[] = ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'];

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', this.user);
      // Reset user object
      this.user = {
        firstname: '',
        lastname: '',
        age: null,
        address: '',
        city: '',
        gender: ''
      };

      // Reset the form state
      form.reset();
    } else {
      console.log('Form is not valid');
    }
  }
}

