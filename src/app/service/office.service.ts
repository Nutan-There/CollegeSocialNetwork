import { Injectable } from '@angular/core';
import { Office } from '../office';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {
  private officeList: Office[] = [{
    id: 1,
    documentType: 'Exam Form',
    endDate: new Date('12/09/2022')
  }];
  

  constructor() {}

  getOffices(){
    return this.officeList
  }
  getOfficesByID(id: number){
    return this.officeList.find(x=> x.id == id)
  }
  addOffice(office: Office){
    office.id = new Date().getTime();
    this.officeList.push(office);
  }
  updateOffice(office: Office){
    const officeIndex = this.officeList.findIndex(x => x.id == office.id);
    if(officeIndex != null && officeIndex != undefined) {
      this.officeList[officeIndex] = office;
    }
  }
  removeOffice(id: number){
    this.officeList = this.officeList.filter(x => x.id != id);
  }
}
