import { Component, OnInit } from '@angular/core';
import {EhsmIncidentChange} from '../ehsm-incident-change';
import{ HttpClient,HttpErrorResponse} from '@angular/common/http';
import {throwError,Observable} from 'rxjs';
@Component({
  selector: 'app-ehsm-incident-change',
  templateUrl: './ehsm-incident-change.component.html',
  styleUrls: ['./ehsm-incident-change.component.css']
})
export class EhsmIncidentChangeComponent implements OnInit {
  EhsmIncidentChangeModel = new EhsmIncidentChange('','','','','','','','','','','','')
  errorMsg = '';
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.EhsmIncidentChangeModel)
    this.submitted = true; 
    let inciid = this.EhsmIncidentChangeModel.incidentid;
    let incititle = this.EhsmIncidentChangeModel.incidenttitle;
     let incidesc = this.EhsmIncidentChangeModel.incidentdesc;
     let incicat = this.EhsmIncidentChangeModel.incidentcat;
     let incigrp = this.EhsmIncidentChangeModel.incidentgrp;
     let incidate = this.EhsmIncidentChangeModel.incidentdate;
     let incitime = this.EhsmIncidentChangeModel.incidenttime;
     let id = this.EhsmIncidentChangeModel.plantid;
     let plantaddr = this.EhsmIncidentChangeModel.address;
     let repoperson = this.EhsmIncidentChangeModel.reportingperson;
     let repodate = this.EhsmIncidentChangeModel.reportingdate;
     let repotime = this.EhsmIncidentChangeModel.reportingtime;
      /* let button = (document.querySelector('#search') as HTMLButtonElement);
       let para = (document.querySelector('#hello') as HTMLParagraphElement);*/
       
       const myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
      
     const raw = JSON.stringify({incidentid:inciid,incidenttitle:incititle,incidentdesc:incidesc,incidentcat:incicat,
                                 incidentgrp:incigrp,incidentdate:incidate,incidenttime:incitime,
                                 plantid:id,address:plantaddr,reportingperson:repoperson,reportingdate:repodate,reportingtime:repotime});
     console.log(raw);
     const requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };
      this.ehsmchangeincident(requestOptions).then((response)=>{
        response.json().then((result)=>{
          console.log(result);
          this.errorMsg = result.response;
          error => this.errorMsg = error.statusText
         /* para.textContent = `${result.vendorAddr} is the vendor address, and his name is ${result.vendorName}`;*/
        }).catch(this.errorHandler)

      })
       

  }

ehsmchangeincident(requestOptions){
  console.log(requestOptions);
return fetch("http://localhost:8000/ehsmchangeincident",requestOptions)
}
errorHandler(error : HttpErrorResponse){
  return throwError(error);

  }
}
