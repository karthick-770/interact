import { Component, OnInit } from '@angular/core';
import { Clogin } from '../../clogin';
 import{LoginService} from '../../login.service';
@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  employeeModel = new Clogin( '','');
     errorMsg = '';
    submitted = false;

  constructor(private _loginService:LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true; 
   this._loginService.login(this.employeeModel)
   .subscribe(
       data => console.log('success!',data),
       error => this.errorMsg = error.statusText
       
   )

}

}
