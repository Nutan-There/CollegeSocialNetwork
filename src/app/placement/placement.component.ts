import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { first } from 'rxjs';
import Swal from 'sweetalert2';
import { PlacementNewService } from '../PlacementService/placement-new.service';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent implements OnInit {




  placementform!: FormGroup;
  placementdata: any[] = [];
  submitted = false;
  constructor(private formBuilder: FormBuilder, private placementservice: PlacementNewService) { }

  ngOnInit(): void {
    this.placementform = this.formBuilder.group({
      studentId: [''],
      requirements: ['', Validators.required],
      placedStudent: ['', Validators.required],
    });
    this.getAllPlacements();
  }

  getAllPlacements() {
    this.placementservice.getPlacementsList().subscribe(res => {
      this.placementdata = res;
    })
  }

  get f() { return this.placementform.controls; }

  onSubmit() {
    this.submitted = true;
    let keyidval_text = this.placementform.value.id;
    if (keyidval_text != "") {
      this.updatePlacement(keyidval_text);
      this.getAllPlacements();
    }
    else {
      if (this.placementform.valid) {
        this.addPlacements();
        this.getAllPlacements();
      }
    }
  }

  clearControls() {
    this.placementform.value.requirements = '';
    this.placementform.value.placedStudent = '';
  }

  addPlacements() {
    this.placementservice
      .addPlacement_new({
        studentid: 100,
        requirements: this.placementform.value.requirements,
        placedStudent: this.placementform.value.placedStudent,
      })
      .subscribe((response: any) => {
        this.clearControls();
        this.getAllPlacements();
      },
      );
  }

  editUser(id: any) {
    console.log('Edit', id);
    this.placementservice.getPlacementByStudentId(id)
      .pipe(first())
      .subscribe(x => this.placementform.patchValue(x));
    this.clearControls();
    this.getAllPlacements();
  }

  deleteUser(id: any) {
    console.log('delete', id);
    this.placementservice.delete(id)
      .pipe(first())
      .subscribe(() => this.placementdata = this.placementdata.filter(x => x.studentId !== id));
    this.clearControls();
    this.getAllPlacements();
  }



  updatePlacement(id: any) {
    debugger;
    this.placementservice.update(id, this.placementform.value)
      .pipe(first())
      .subscribe({
        next: () => {
        },
        error: error => {
        }
      });
    this.clearControls();
    this.getAllPlacements();

  }




}
