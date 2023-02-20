import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-grid-form',
  templateUrl: './grid-form.component.html',
  styleUrls: ['./grid-form.component.scss']
})
export class GridFormComponent {
  clientForm = this.fb.group({
    clientCode: [''],
    clientName: [''],
    addressMail: this.fb.group({
      street1: [''],
      street2: [''],
      city: [''],
      state:[''],
      zip: [''],
      contact:[''],
      telNo: [''],
      cellNo:[''],
      email: [''],
    }),
    addressShip: this.fb.group({
      street1: [''],
      street2: [''],
      city: [''],
      state:[''],
      zip: [''],
      contact:[''],
      telNo: [''],
      cellNo:[''],
      email: [''],
    }),

    otherInfo: this.fb.group({
      secondCtc: [''],
      altPhone: [''],
      suretyCo:[''],
      bondAmount: [''],
      paymentTerms: [''],
      creditLimit:[''],
      paymentStatus: [''],
      payorUnitNo: [''],
      trucker: [''],
      truckerTel: [''],
      truckerCtc: [''],
      salesMan: [''],
      ctpatStatus:[''],
      knownShipper: ['']
    })

  })

  constructor(private fb: FormBuilder){}

  onSubmit() {
    console.log(this.clientForm.value);
  }
}
