import { Component, OnInit } from '@angular/core';
import {throwError,Observable} from 'rxjs';
import{ HttpClient,HttpErrorResponse} from '@angular/common/http';
import {GetDate} from '../../date';

@Component({
  selector: 'app-goods-receipt',
  templateUrl: './goods-receipt.component.html',
  styleUrls: ['./goods-receipt.component.css']
})
export class GoodsReceiptComponent implements OnInit {
  ItemsArray= [];
  submitted=false;
  datesubmitted = false;
  dateModel = new GetDate('','');
  doc_no = '';
  errorMsg = '';
  
  constructor() { }

  ngOnInit(): void {
    this.getdetails();
  }
  getdetails(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
  const raw = JSON.stringify({});
  
  const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
   this.vendorgoodsreceipt(requestOptions).then((response)=>{
     response.json().then((result)=>{
      this.ItemsArray = result.response;
      console.log(this.ItemsArray);
      
       error => this.errorMsg = error.statusText
      /* para.textContent = `${result.vendorAddr} is the vendor address, and his name is ${result.vendorName}`;*/
     }).catch(this.errorHandler)

   })
    
  }
  vendorgoodsreceipt(requestOptions){
    return fetch("http://localhost:8000/vendorgoodsreceipt",requestOptions)
}
errorHandler(error : HttpErrorResponse){
  return throwError(error);
}
filterByDate(){
  this.datesubmitted = true;
  
  //var syear = this.dateModel.startdate.substring(6,10);
  //var smonth = this.dateModel.startdate.substring(3,5);
  //var sday = this.dateModel.startdate.substring(0,2);
  var startdate = new Date(this.dateModel.startdate);
  this.dateModel.startdate = startdate;
  var formattedstartdate = this.dateModel.startdate.getFullYear()+'-'+('0'+(this.dateModel.startdate.getMonth()+1)).slice(-2)+'-'+('0'+this.dateModel.startdate.getDate()).slice(-2);
  var enddate = new Date(this.dateModel.enddate);
  this.dateModel.enddate = enddate;
  var formattedenddate = this.dateModel.enddate.getFullYear()+'-'+('0'+(this.dateModel.enddate.getMonth()+1)).slice(-2)+'-'+('0'+this.dateModel.enddate.getDate()).slice(-2);
  this.dateModel.startdate = formattedstartdate;
  this.dateModel.enddate = formattedenddate;
  console.log(this.dateModel);
  
}
refresh(){
  this.datesubmitted = false;
}
  data(docno: string){
    this.doc_no = docno;
    console.log(this.doc_no);
  }
 
  checkDate(itemdate: any){
    if(itemdate >= this.dateModel.startdate && itemdate <= this.dateModel.enddate){
      return true; 
    }
    else{
      return false;
    }

  }


}
