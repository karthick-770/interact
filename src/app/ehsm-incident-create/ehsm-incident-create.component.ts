import { Component, OnInit } from '@angular/core';
import {EhsmIncidentChange} from '../ehsm-incident-change';
import{ HttpClient,HttpErrorResponse} from '@angular/common/http';
import {throwError,Observable} from 'rxjs';
@Component({
  selector: 'app-ehsm-incident-create',
  templateUrl: './ehsm-incident-create.component.html',
  styleUrls: ['./ehsm-incident-create.component.css']
})
export class EhsmIncidentCreateComponent implements OnInit {
  EhsmIncidentCreateModel = new EhsmIncidentChange('','','','','','','','','','','','')
  errorMsg = '';
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    
    this.submitted = true; 
    let incititle = this.EhsmIncidentCreateModel.incidenttitle;
     let incidesc = this.EhsmIncidentCreateModel.incidentdesc;
     let incicat = this.EhsmIncidentCreateModel.incidentcat;
     let incigrp = this.EhsmIncidentCreateModel.incidentgrp;
     let incidate = this.EhsmIncidentCreateModel.incidentdate;
     let incitime = this.EhsmIncidentCreateModel.incidenttime;
     let id = this.EhsmIncidentCreateModel.plantid;
     let plantaddr = this.EhsmIncidentCreateModel.address;
     let repoperson = this.EhsmIncidentCreateModel.reportingperson;
     let repodate = this.EhsmIncidentCreateModel.reportingdate;
     let repotime = this.EhsmIncidentCreateModel.reportingtime;
      /* let button = (document.querySelector('#search') as HTMLButtonElement);
       let para = (document.querySelector('#hello') as HTMLParagraphElement);*/
       
       const myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
      
     const raw = JSON.stringify({incidenttitle:incititle,incidentdesc:incidesc,incidentcat:incicat,
                                 incidentgrp:incigrp,incidentdate:incidate,incidenttime:incitime,
                                 plantid:id,address:plantaddr,reportingperson:repoperson,reportingdate:repodate,reportingtime:repotime});
     console.log(raw);
     const requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };
      this.ehsmcreateincident(requestOptions).then((response)=>{
        response.json().then((result)=>{
          console.log(result);
          this.errorMsg = result.response;
          error => this.errorMsg = error.statusText
         /* para.textContent = `${result.vendorAddr} is the vendor address, and his name is ${result.vendorName}`;*/
        }).catch(this.errorHandler)

      })
       

  }

ehsmcreateincident(requestOptions){
  console.log(requestOptions);
return fetch("http://localhost:8000/ehsmcreateincident",requestOptions)
}
errorHandler(error : HttpErrorResponse){
  return throwError(error);
}
}