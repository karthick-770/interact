import { Component, OnInit } from '@angular/core';
import {Employeeprofileedit} from '../../employeeprofileedit';
@Component({
  selector: 'app-employee-profile-edit',
  templateUrl: './employee-profile-edit.component.html',
  styleUrls: ['./employee-profile-edit.component.css']
})
export class EmployeeProfileEditComponent implements OnInit {
  EmployeeprofileeditModel = new Employeeprofileedit('','','','','','');
  errorMsg = '';
  submitted = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){

  }
}
