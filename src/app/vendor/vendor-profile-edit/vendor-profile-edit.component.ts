import { Component, OnInit } from '@angular/core';
import {Vendorprofileedit} from '../../vendorprofileedit'
import{ HttpClient,HttpErrorResponse} from '@angular/common/http';
import {throwError,Observable} from 'rxjs';
@Component({
  selector: 'app-vendor-profile-edit',
  templateUrl: './vendor-profile-edit.component.html',
  styleUrls: ['./vendor-profile-edit.component.css']
})
export class VendorProfileEditComponent implements OnInit {

 
  vendorprofileeditModel = new Vendorprofileedit('','','','','','','','','');
  errorMsg = '';
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this.submitted = true; 
    let  vendorid= this.vendorprofileeditModel.vendorid;
     let vendorname = this.vendorprofileeditModel.name;
     let vendorcity = this.vendorprofileeditModel.city;
     let vendordistrict = this.vendorprofileeditModel.district;
     let vendorpcode = this.vendorprofileeditModel.postalcode;
     let vendorcountry = this.vendorprofileeditModel.country;
     let vendoraddr = this.vendorprofileeditModel.address;
     let faxno = this.vendorprofileeditModel.fax;
     let teleno = this.vendorprofileeditModel.telephone;
     
      /* let button = (document.querySelector('#search') as HTMLButtonElement);
       let para = (document.querySelector('#hello') as HTMLParagraphElement);*/
       
       const myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
      
     const raw = JSON.stringify({venid:vendorid,name:vendorname,city:vendorcity,
                                 district:vendordistrict,postalcode:vendorpcode,country:vendorcountry,
                                 address:vendoraddr,fno:faxno,tno:teleno});
     console.log(raw);
     const requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };
      this.vendorchangeprofile(requestOptions).then((response)=>{
        response.json().then((result)=>{
          console.log(result);
          this.errorMsg = result.response;
          error => this.errorMsg = error.statusText
         /* para.textContent = `${result.vendorAddr} is the vendor address, and his name is ${result.vendorName}`;*/
        }).catch(this.errorHandler)

      })
       

  }

  vendorchangeprofile(requestOptions){
  console.log(requestOptions);
return fetch("http://localhost:8000/vendorchangeprofile",requestOptions)
}
errorHandler(error : HttpErrorResponse){
  return throwError(error);
}
}
