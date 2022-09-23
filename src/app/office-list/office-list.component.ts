import { Component, OnInit } from "@angular/core";
import { Office } from "../office";
import { OfficeService } from "../service/office.service";

@Component({
    selector: 'app-office-list',
    templateUrl: './office-list.component.html',
    styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {
    
  officeList: Office[] =[];
  first = 0;
  rows =10;
  constructor(private officeService: OfficeService) {}
  ngOnInit(): void {
      this.officeList = this.officeService.getOffices();
  }
  next() {
    this.first = this.first + this.rows;
  }
  prev() {
    this.first = this.first - this.rows;
  }
  reset() {
    this.first = 0;
  } 
  isLastPage(): boolean {
    return this.officeList ? this.first === (this.officeList.length - this.rows) : true;
  }
  isFirstPage():boolean {
    return this.officeList ? this.first === 0 : true;
  }

  remove(id: number) {
    this.officeService.removeOffice(id);
    this.officeList = this.officeService.getOffices();
  }
}