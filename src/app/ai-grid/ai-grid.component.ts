import { FormBuilder, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-grid',
  templateUrl: './ai-grid.component.html',
  styleUrls: ['./ai-grid.component.scss']
})
export class AiGridComponent {
clientForm = this.fb.group({
    clientCode: ['', Validators.required],
    clientName: [''],
    addressMail: this.fb.group({
      street1: ['', Validators.required],
      street2: [''],
      city: ['', Validators.required],
      state:['', Validators.required],
      zip: ['', Validators.required],
      contact:['', Validators.required],
      telNo: ['', Validators.required],
      cellNo:['', Validators.required],
      email: ['', Validators.required],
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
