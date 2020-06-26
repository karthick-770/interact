import { Component, OnInit } from '@angular/core';
import {Employeeprofileedit} from '../../employeeprofileedit';
@Component({
  selector: 'app-customer-profile-edit',
  templateUrl: './customer-profile-edit.component.html',
  styleUrls: ['./customer-profile-edit.component.css']
})
export class CustomerProfileEditComponent implements OnInit {
  EmployeeprofileeditModel = new Employeeprofileedit('','','','','','');
  errorMsg = '';
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
 onSubmit(){
   
 }
}
