import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {GetDate} from '../date'

@Component({
  selector: 'app-getdate',
  templateUrl: './getdate.component.html',
  styleUrls: ['./getdate.component.css']
})
export class GetdateComponent implements OnInit {
  submitted = false;
  dateModel = new GetDate('','');
  constructor() { }
   
  form: FormGroup = new FormGroup({

  })

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.dateModel);
    this.submitted = true;
  }
}
