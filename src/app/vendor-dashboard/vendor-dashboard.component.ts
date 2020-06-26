import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {
  showModal: boolean;
  submitted = false;
 

  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPurchaseOrder()
  }
 
  getPurchaseOrder(){
     this.router.navigate(['purchaseorder'], {relativeTo: this.route})
  }
  getQuotation(){
    this.router.navigate(['quotation'], {relativeTo: this.route})
 }
 getGoodsReceipt(){
  this.router.navigate(['goodsreceipt'], {relativeTo: this.route})
}

}
