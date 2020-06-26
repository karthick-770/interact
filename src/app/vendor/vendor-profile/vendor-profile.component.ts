import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{ HttpClient,HttpErrorResponse} from '@angular/common/http';
import {throwError,Observable} from 'rxjs';
import {Vendorprofileedit} from '../../vendorprofileedit';
@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})

  
export class VendorProfileComponent implements OnInit {
  errorMsg = '';
   VendorProfileModel = new Vendorprofileedit('','','','','','','','','');
  constructor(private router: Router,private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
   
     this.getdetails()
     
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
   this.vendordisplayprofile(requestOptions).then((response)=>{
     response.json().then((result)=>{
       this.VendorProfileModel.name = result.name;
       this.VendorProfileModel.city = result.city;
       this.VendorProfileModel.district = result.district;
       this.VendorProfileModel.postalcode = result.postalcode;
       this.VendorProfileModel.country = result.country;
       this.VendorProfileModel.address = result.address;
       this.VendorProfileModel.fax = result.faxno;
       this.VendorProfileModel.telephone = result.teleno;
      
       error => this.errorMsg = error.statusText
      /* para.textContent = `${result.vendorAddr} is the vendor address, and his name is ${result.vendorName}`;*/
     }).catch(this.errorHandler)

   })
    
  }
  vendordisplayprofile(requestOptions){
    return fetch("http://localhost:8000/vendorprofiledisplay",requestOptions)
}
errorHandler(error : HttpErrorResponse){
  return throwError(error);
}
  
  editProfile(){
      this.router.navigate(['vendorprofileedit'], {relativeTo:this.route})
  }
}
