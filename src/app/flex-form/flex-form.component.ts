import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-flex-form',
  templateUrl: './flex-form.component.html',
  styleUrls: ['./flex-form.component.scss']
})
export class FlexFormComponent {
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

  onSubmit(): void {
    alert('Thanks!');
  }
}
