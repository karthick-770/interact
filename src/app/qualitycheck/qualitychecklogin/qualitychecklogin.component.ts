import { Component, OnInit } from '@angular/core';
import { Clogin } from '../../clogin';
 import{LoginService} from '../../login.service';
@Component({
  selector: 'app-qualitychecklogin',
  templateUrl: './qualitychecklogin.component.html',
  styleUrls: ['./qualitychecklogin.component.css']
})
export class QualitycheckloginComponent implements OnInit {

  qualitycheckModel = new Clogin( '','');
  errorMsg = '';
 submitted = false;

  constructor(private _loginService:LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true; 
    let custid = ((document.getElementById("userid") as HTMLInputElement));
    let pwd = ((document.getElementById("password") as HTMLInputElement));
      /* let button = (document.querySelector('#search') as HTMLButtonElement);
       let para = (document.querySelector('#hello') as HTMLParagraphElement);*/
       console.log(custid.value,pwd.value);
       const myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
       const id = custid.value;
       const pswd = pwd.value;
     const raw = JSON.stringify({customerid: id,customerpwd: pswd});
     const requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };
      this._loginService.getData(requestOptions).then((response)=>{
        response.json().then((result)=>{
          console.log(result);
         /* para.textContent = `${result.vendorAddr} is the vendor address, and his name is ${result.vendorName}`;*/
        })
      })

}


}
