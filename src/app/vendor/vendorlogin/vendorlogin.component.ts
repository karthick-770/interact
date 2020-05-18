import { Component, OnInit } from '@angular/core';
import { Clogin } from '../../clogin';
 import{LoginService} from '../../login.service';

@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {

  vendorModel = new Clogin( '','');
     errorMsg = '';
    submitted = false;

  constructor(private _loginService:LoginService) { 
    
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true; 
   this._loginService.login(this.vendorModel)
   .subscribe(
       data => console.log('success!',data),
       error => this.errorMsg = error.statusText
       
   )

}
}
