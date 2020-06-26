import { Component, OnInit } from '@angular/core';
import {Employeeleaverequest} from '../../employeeleaverequest'
import{ HttpClient,HttpErrorResponse} from '@angular/common/http';
import {throwError,Observable} from 'rxjs';
@Component({
  selector: 'app-employee-leave-request',
  templateUrl: './employee-leave-request.component.html',
  styleUrls: ['./employee-leave-request.component.css']
})
export class EmployeeLeaveRequestComponent implements OnInit {
  
  EmployeeleaverequestModel = new Employeeleaverequest('','','','','','','');
  errorMsg = '';
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true; 
    
     let empname = this.EmployeeleaverequestModel.name;
     let leavepurpose = this.EmployeeleaverequestModel.purpose;
     let leavedays = this.EmployeeleaverequestModel.noofdays;
     let leavefrom = this.EmployeeleaverequestModel.from;
     let leavetill = this.EmployeeleaverequestModel.to;
     let managername = this.EmployeeleaverequestModel.hrname;
     let type = this.EmployeeleaverequestModel.leavetype;
    
     
      /* let button = (document.querySelector('#search') as HTMLButtonElement);
       let para = (document.querySelector('#hello') as HTMLParagraphElement);*/
       
       const myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
      
     const raw = JSON.stringify({name: empname,purpose: leavepurpose,noofdays: leavedays,
                                  from: leavefrom,to:leavetill,hrname:managername,leavetype: type});
     console.log(raw);
     const requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };
      this.employeeleaverequest(requestOptions).then((response)=>{
        response.json().then((result)=>{
          console.log(result);
         
          error => this.errorMsg = error.statusText
         /* para.textContent = `${result.vendorAddr} is the vendor address, and his name is ${result.vendorName}`;*/
        }).catch(this.errorHandler)

      })
       

  }

  employeeleaverequest(requestOptions){
  console.log(requestOptions);
return fetch("http://localhost:8000/employeeleaverequest",requestOptions)
}
errorHandler(error : HttpErrorResponse){
  return throwError(error);
  }
}
