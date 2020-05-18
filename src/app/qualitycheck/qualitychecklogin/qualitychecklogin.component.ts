import { Component, OnInit } from '@angular/core';
import { Clogin } from '../../clogin';
 import{LoginService} from '../../login.service';
@Component({
  selector: 'app-qualitychecklogin',
  templateUrl: './qualitychecklogin.component.html',
  styleUrls: ['./qualitychecklogin.component.css']
})
export class QualitycheckloginComponent implements OnInit {

  qualitycheckModel = new Clogin( '','');
  errorMsg = '';
 submitted = false;

  constructor(private _loginService:LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true; 
   this._loginService.login(this.qualitycheckModel)
   .subscribe(
       data => console.log('success!',data),
       error => this.errorMsg = error.statusText
       
   )

}


}
