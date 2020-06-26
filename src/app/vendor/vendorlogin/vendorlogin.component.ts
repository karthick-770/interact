import { Component, OnInit } from '@angular/core';
import { Login } from '../../login';
 import{LoginService} from '../../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {

  vendorModel = new Login( '','');
     errorMsg = '';
    submitted = false;

  constructor(private _loginService:LoginService,private router: Router ) { 
    
  }

  ngOnInit(): void {
    
  }
  onSubmit(){
    console.log(this.vendorModel)
    this.submitted = true; 
    let venid = this.vendorModel.userid;
     let venpwd = this.vendorModel.password;
      /* let button = (document.querySelector('#search') as HTMLButtonElement);
       let para = (document.querySelector('#hello') as HTMLParagraphElement);*/
       console.log(venid,venpwd);
       const myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
      
     const raw = JSON.stringify({id: venid,pwd: venpwd});
     console.log(raw);
     const requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };
      this._loginService.vendorLogin(requestOptions).then((response)=>{
        response.json().then((result)=>{
          console.log(result);
          if (result.response == 'success')
          {
            this.router.navigateByUrl('vendorlogin/vendor');
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
