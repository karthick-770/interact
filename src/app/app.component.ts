import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import{fade} from './animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    fade
  ]
})
export class AppComponent   {
 
  constructor(){
  }
 
  title = 'mysapwebpage';

}
