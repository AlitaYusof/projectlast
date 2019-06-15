import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  section3: string = 'parcel';
  job1:string
  constructor() {}
  createjop() {
  if (this.section3 == 'parcel') {
    this.job1 = "พัสดุ";
  } else if (this.section3 == 'food') {
    this.job1 = "อาหาร";
  } else {
    this.job1 = "เอกสาร";
  }
}
}
