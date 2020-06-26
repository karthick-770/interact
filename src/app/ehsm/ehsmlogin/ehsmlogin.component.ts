import { Component, OnInit } from '@angular/core';
import { Login } from '../../login';
 import{LoginService} from '../../login.service';
 import{ Router} from '@angular/router';

@Component({
  selector: 'app-ehsmlogin',
  templateUrl: './ehsmlogin.component.html',
  styleUrls: ['./ehsmlogin.component.css']
})
export class EhsmloginComponent implements OnInit {
  ehsmModel = new Login( '','');
  errorMsg = '';
 submitted = false;

  constructor(private _loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.ehsmModel)
    this.submitted = true; 
    let safeid = this.ehsmModel.userid;
     let safepwd = this.ehsmModel.password;
      /* let button = (document.querySelector('#search') as HTMLButtonElement);
       let para = (document.querySelector('#hello') as HTMLParagraphElement);*/
       console.log(safeid,safepwd);
       const myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
      
     const raw = JSON.stringify({id: safeid,pwd: safepwd});
     console.log(raw);
     const requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };
      this._loginService.ehsmLogin(requestOptions).then((response)=>{
        response.json().then((result)=>{
          console.log(result);
          if (result.response == 'success')
          {
            this.router.navigateByUrl('ehsmlogin/ehsm');
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
