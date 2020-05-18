import { Component, OnInit } from '@angular/core';
import { Clogin } from '../../clogin';
 import{LoginService} from '../../login.service';

@Component({
  selector: 'app-maintanencelogin',
  templateUrl: './maintanencelogin.component.html',
  styleUrls: ['./maintanencelogin.component.css']
})
export class MaintanenceloginComponent implements OnInit {

  maintanenceModel = new Clogin( '','');
  errorMsg = '';
 submitted = false;
  constructor(private _loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true; 
   this._loginService.login(this.maintanenceModel)
   .subscribe(
       data => console.log('success!',data),
       error => this.errorMsg = error.statusText
       
   )

}
}
