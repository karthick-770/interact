import { Component, OnInit } from '@angular/core';
import { Clogin } from '../../clogin';
 import{LoginService} from '../../login.service';
 import{Router} from '@angular/router';
@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  employeeModel = new Clogin( '','');
     errorMsg = '';
    submitted = false;

  constructor(private _loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true; 
    let empid = this.employeeModel.userid;
    let pwd = this.employeeModel.password;
      /* let button = (document.querySelector('#search') as HTMLButtonElement);
       let para = (document.querySelector('#hello') as HTMLParagraphElement);*/
       const myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
      
     const raw = JSON.stringify({id: empid,pwd: pwd});
     console.log(raw);
     const requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };
      this._loginService.employeeLogin(requestOptions).then((response)=>{
        response.json().then((result)=>{
          console.log(result);
          if (result.response == 'success')
          {
            this.router.navigateByUrl('employeelogin/employee');
            this._loginService.setLogggedIn(true);
            
          }
          else{
           // this.router.navigateByUrl('ehsmlogin');
            this.errorMsg = result.response;
          }
          
          error => this.errorMsg = error.statusText
         /* para.textContent = `${result.vendorAddr} is the vendor address, and his name is ${result.vendorName}`;*/
        }).catch(this._loginService.errorHandler)
      })
       

}

}
