import { Component, OnInit } from '@angular/core';
import { Clogin } from '../../clogin';
 import{LoginService} from '../../login.service';

@Component({
  selector: 'app-ehsmlogin',
  templateUrl: './ehsmlogin.component.html',
  styleUrls: ['./ehsmlogin.component.css']
})
export class EhsmloginComponent implements OnInit {
  ehsmModel = new Clogin( '','');
  errorMsg = '';
 submitted = false;

  constructor(private _loginService:LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true; 
   this._loginService.login(this.ehsmModel)
   .subscribe(
       data => console.log('success!',data),
       error => this.errorMsg = error.statusText
       
   )

}

}
