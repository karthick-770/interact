import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-customer-financial-sheet',
  templateUrl: './customer-financial-sheet.component.html',
  styleUrls: ['./customer-financial-sheet.component.css']
})
export class CustomerFinancialSheetComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  getInvoice(){
    this.router.navigate(['invoice'], {relativeTo: this.route})
 }
 getPayments(){
   this.router.navigate(['paymentsandaging'], {relativeTo: this.route})
}
getCreditMemo(){
 this.router.navigate(['creditmemo'], {relativeTo: this.route})
}
getOverallSales(){
  this.router.navigate(['overallsales'], {relativeTo: this.route})
 }
}
