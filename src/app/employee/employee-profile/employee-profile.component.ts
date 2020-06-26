import { Component, OnInit } from '@angular/core';
import {Employeeprofileedit} from '../../employeeprofileedit';
import {Router,ActivatedRoute} from '@angular/router'
import{ HttpClient,HttpErrorResponse} from '@angular/common/http';
import {throwError,Observable} from 'rxjs';
@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  errorMsg = '';
  EmployeeProfileModel = new Employeeprofileedit('','','','','','')
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
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
   this.employeedisplayprofile(requestOptions).then((response)=>{
     response.json().then((result)=>{
       
       this.EmployeeProfileModel.empname = result.name;
       this.EmployeeProfileModel.empage = result.age;
       this.EmployeeProfileModel.empgender = result.gender;
       this.EmployeeProfileModel.empcontact = result.contact;
       this.EmployeeProfileModel.location = result.address;
       this.EmployeeProfileModel.designation = result.designation;
      
      
       error => this.errorMsg = error.statusText
      /* para.textContent = `${result.vendorAddr} is the vendor address, and his name is ${result.vendorName}`;*/
     }).catch(this.errorHandler)

   })
    
  }
  employeedisplayprofile(requestOptions){
    return fetch("http://localhost:8000/employeerprofiledisplay",requestOptions)
}
errorHandler(error : HttpErrorResponse){
  return throwError(error);
}
  
  editProfile(){
    this.router.navigate(['employeeprofileedit'], {relativeTo:this.route})
}
}
