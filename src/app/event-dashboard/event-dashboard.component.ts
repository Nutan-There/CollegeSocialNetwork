import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { EventModel } from './event-dash board.model';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.css']
})
export class EventDashboardComponent implements OnInit {

  formValue !:FormGroup;
  eventModelObj : EventModel=new EventModel();
  eventData !: any;
  showAdd! : boolean;
  showUpdate! : boolean;

  constructor(private formbuilber:FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilber.group({
      EventId : [''],
      EventName : [''],
      EventSponser : [],
      Venue : ['']
    })
     this.getAllEvent();
  }

  clickAddEvent(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postEventDetails(){
    this.eventModelObj.EventId=this.formValue.value.EventId;
    this.eventModelObj.EventName=this.formValue.value.EventName;
    this.eventModelObj.EventSponser=this.formValue.value.EventSponser;
    this.eventModelObj.Venue=this.formValue.value.Venue;

    this.api.postEvent(this.eventModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("event added sucessfully")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEvent();
    },
    err=>{
      alert("something went wrong")
    })
  }

  getAllEvent(){
    this.api.getEvent()
    .subscribe(res=>{
      this.eventData=res;
    })
  }

  deleteEvent(row :any){
    this.api.deleteEvent(row.id)
    .subscribe(res=>{
      alert("event deleted");
      this.getAllEvent();
    })
  }

  onEdit(row :any){
    this.showAdd=false;
    this.showUpdate=true;
    this.formValue.controls['EventId'].setValue(row.EventId);
    this.formValue.controls['EventName'].setValue(row.EventName)
    this.formValue.controls['EventSponser'].setValue(row.EventSponser)
    this.formValue.controls['Venue'].setValue(row.Venue)
  }

  updateEventDetails(){
    this.eventModelObj.EventId=this.formValue.value.EventId;
    this.eventModelObj.EventName=this.formValue.value.EventName;
    this.eventModelObj.EventSponser=this.formValue.value.EventSponser;
    this.eventModelObj.Venue=this.formValue.value.Venue;
    this.api.updateEvent(this.eventModelObj,this.eventModelObj.id)
    .subscribe(res=>{
      alert("updated successfully");
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEvent();
    })
  }
}
