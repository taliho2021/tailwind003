import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-flex-grid',
  templateUrl: './flex-grid.component.html',
  styleUrls: ['./flex-grid.component.scss']
})
export class FlexGridComponent {
  clientForm = this.fb.group({
    clientCode: [''],
    clientName: [''],
    addressMail: this.fb.group({
      street1: [''],
      street2: [''],
      city: [''],
      state:[''],
      zip: ['']
    }),
  })

  constructor(private fb: FormBuilder){}

  onSubmit(): void {
    alert('Thanks!');
  }

}
