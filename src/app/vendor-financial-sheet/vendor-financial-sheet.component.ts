import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-vendor-financial-sheet',
  templateUrl: './vendor-financial-sheet.component.html',
  styleUrls: ['./vendor-financial-sheet.component.css']
})
export class VendorFinancialSheetComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInvoice();
  }
  getInvoice(){
    this.router.navigate(['invoicedetails'], {relativeTo: this.route})
 }
 getPaymentOverdue(){
   this.router.navigate(['paymentoverdues'], {relativeTo: this.route})
}
getCreditMemo(){
 this.router.navigate(['creditmemo'], {relativeTo: this.route})
}
}
