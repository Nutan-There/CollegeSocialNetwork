import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  officeForm = new FormGroup({
    officeid: new FormControl(""),
    documenttype: new FormControl(""),
    enddate: new FormControl(""),
  });

  officeSubmited(){
    console.log(this.officeForm.get("firstname"));
  }
  get OfficeId(): FormControl{
    return this.officeForm.get("officeid") as FormControl;
  }
  get DocumentType(): FormControl{
    return this.officeForm.get("documenttype") as FormControl;
  }
  get EndDate(): FormControl{
    return this.officeForm.get("enddate") as FormControl;
  }
  
}
