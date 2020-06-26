import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-employee-leave',
  templateUrl: './employee-leave.component.html',
  styleUrls: ['./employee-leave.component.css']
})
export class EmployeeLeaveComponent implements OnInit {
  
  ItemsArray = [];
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  requestLeave(){
    this.router.navigate(['employeeleaverequest'], {relativeTo:this.route})
}
}
