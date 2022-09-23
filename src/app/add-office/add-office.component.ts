import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfficeService } from '../service/office.service';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {

  id: number =0;
  officeform: FormGroup;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private officeService: OfficeService
  ) { 

  this.officeform = this.fb.group({
    documentType: ['',[Validators.required]],
    endDate: [null,[Validators.required]],
  });
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.officeform.get('Id')?.setValue(params['id']);
        const data = this.officeService.getOfficesByID(this.id);
        if (data){
          this.officeform.setValue(data);
        }
      }
    });
  }

  save() { 
    if(this.officeform.invalid)
    return

    if(this.officeform.get('id')?.value === 0) {
      this.officeService.addOffice(this.officeform.value);
    } else {
      this.officeService.updateOffice(this.officeform.value);
    }

    this.router.navigate(['/office']);
  }
}
