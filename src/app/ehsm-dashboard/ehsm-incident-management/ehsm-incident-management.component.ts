import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {throwError,Observable} from 'rxjs';
import{ HttpClient,HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-ehsm-incident-management',
  templateUrl: './ehsm-incident-management.component.html',
  styleUrls: ['./ehsm-incident-management.component.css']
})
export class EhsmIncidentManagementComponent implements OnInit {
  ItemsArray = [];
  errorMsg = '';
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
   this.ehsmincident(requestOptions).then((response)=>{
     response.json().then((result)=>{
       
      this.ItemsArray = result.response;
       error => this.errorMsg = error.statusText
      /* para.textContent = `${result.vendorAddr} is the vendor address, and his name is ${result.vendorName}`;*/
     }).catch(this.errorHandler)

   })
    
  }
  ehsmincident(requestOptions){
    return fetch("http://localhost:8000/ehsmincidents",requestOptions)
}
errorHandler(error : HttpErrorResponse){
  return throwError(error);
}
  
  createIncidents(){
    this.router.navigate(['createincident'], {relativeTo: this.route})
  }
  changeIncidents(){
    this.router.navigate(['changeincident'], {relativeTo: this.route})
  }
}
