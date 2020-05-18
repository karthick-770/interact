import { Component, OnInit } from '@angular/core';
import { Clogin } from '../../clogin';
 import{LoginService} from '../../login.service';
@Component({
  selector: 'app-shopfloorlogin',
  templateUrl: './shopfloorlogin.component.html',
  styleUrls: ['./shopfloorlogin.component.css']
})
export class ShopfloorloginComponent implements OnInit {

  shopfloorModel = new Clogin( '','');
  errorMsg = '';
 submitted = false;

  constructor(private _loginService:LoginService) { }
  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true; 
   this._loginService.login(this.shopfloorModel)
   .subscribe(
       data => console.log('success!',data),
       error => this.errorMsg = error.statusText
       
   )

}

}
