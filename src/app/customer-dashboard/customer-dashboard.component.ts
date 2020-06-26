import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  getInquiryData(){
    this.router.navigate(['inquirydata'], {relativeTo: this.route})
 }
 getSalesOrder(){
   this.router.navigate(['salesorder'], {relativeTo: this.route})
}
getListOfDeliveries(){
 this.router.navigate(['listofdeliveries'], {relativeTo: this.route})
}
}
