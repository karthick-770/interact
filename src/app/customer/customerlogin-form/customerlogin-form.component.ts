import { Component, OnInit } from '@angular/core';
import { Clogin } from '../../clogin';
 import{LoginService} from '../../login.service';
 import{ Router} from '@angular/router'
@Component({
  selector: 'app-customerlogin-form',
  template:
   `<div class="body">
   <div class="container-fluid">
        <div class="card card-container">
        
        <img id="profile-img" class="profile-img-card" src="assets/images/loginimg.png" />
      <p id="profile-name" class="profile-name-card">Customer </p>
      <div class="alert alert-danger" *ngIf="errorMsg">
        {{errorMsg}}
      </div>
      <form class="form-signin"  #customerForm="ngForm"  *ngIf="!submitted" (ngSubmit)="onSubmit()" novalidate>

          <span id="reauth-userid" class="reauth-userid"></span>
          <input type="userid" required autofocus #userid="ngModel" 
          [class.is-invalid]="userid.invalid && userid.touched"
            id="userid" class="form-control" 
             placeholder="user id" name="userid"  
                [(ngModel)]= "customerModel.userid">
                  <small class ="text-danger"[class.d-none]="userid.valid || userid.untouched">user id is required!</small>
          <input type="password" required #password="ngModel"
            [class.is-invalid]="password.invalid && password.touched"
                id="password" class="form-control" placeholder="Password" 
                    name="password"  [(ngModel)]= "customerModel.password">
           <small class ="text-danger"[class.d-none]="password.valid || password.untouched">password is required!</small>
        
          <button [disabled] =" customerForm.form.invalid" class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
      </form><!-- /form -->
      </div><!-- /card-container -->
      </div><!-- /container -->
     </div>
  `,
  styles: [
    `
    /*
 * Specific styles of signin component
 */
/*
 * General styles
 */
.body {
    padding:1px;
    height: 100%;
    background: rgba(23,23,23,0.6);

}
.container-fluid{
    padding-top:100px;
    padding-bottom:100px;
   
}

.card-container.card {
    vertical-align: middle;
    max-width: 350px;
    padding: 50px 50px;
    background: rgba(23,23,23,0.7);
}

.btn {
    font-weight: 700;
    height: 36px;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: default;

}

/*
 * Card component
 */
.card {
    background: #353C51;
    /* just in case there no content*/
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    /* shadows and rounded borders */
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

/*
 * Form styles
 */
.profile-name-card {
    font-size: 16px;
    font-family: "Roboto",  sans-serif ;
    text-align: center;
    margin: 10px 0 0;
    min-height: 1em;
    color:whitesmoke;
}

.reauth-userid {
    display: block;
    color: #404040;
    line-height: 2;
    margin-bottom: 10px;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.form-signin #userid,
.form-signin #password {
    direction: ltr;
    height: 44px;
    font-size: 16px;
}

.form-signin input[type=text],
.form-signin input[type=password],
.form-signin input[type=text],
.form-signin button {
    width: 100%;
    display: block;
    margin-bottom: 10px;
    z-index: 1;
    position: relative;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.form-signin .form-control:focus {
    border-color: rgb(104, 145, 162);
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
}

.form-control{
    margin-top: 15px;
    margin-bottom: 15px;


}

.btn.btn-signin {
    background: linear-gradient(to right, #7b4397,  #dc2430);
    padding: 0px;
    font-weight: 700;
    font-size: 14px;
    height: 36px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    border: none;
    -o-transition: all 0.218s;
    -moz-transition: all 0.218s;
    -webkit-transition: all 0.218s;
    transition: all 0.218s;
    opacity:0.8;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.btn.btn-signin:hover,
.btn.btn-signin:active,
.btn.btn-signin:focus {
    opacity:1;
    transform: scale(1.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
}

}`
  ]
})
export class CustomerloginFormComponent implements OnInit {


    

    customerModel = new Clogin( '','');
     errorMsg = '';
    submitted = false;
  constructor(private _loginService:LoginService,private router:Router) { }
  

  ngOnInit(): void {
  }

  onSubmit(){ 
      console.log(this.customerModel)
     this.submitted = true; 
     
     let custid = this.customerModel.userid;
     let pwd = this.customerModel.password;
       /* let button = (document.querySelector('#search') as HTMLButtonElement);
        let para = (document.querySelector('#hello') as HTMLParagraphElement);*/
        console.log(custid,pwd);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({customerid: custid,customerpwd: pwd});
      const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
      
    };
       this._loginService.customerLogin(requestOptions).then((response)=>{
         response.json().then((result)=>{
           console.log(result);
           if (result.response == 'success')
           {
             this.router.navigateByUrl('customerlogin/customer');
             this._loginService.setLogggedIn(true);
             
           }
           else
           {
             this.errorMsg = result.response;
             this.router.navigateByUrl('/customerlogin');
             //localStorage.removeItem('loggedIn');
           }
           error => this.errorMsg = error.statusText
          // para.textContent = `${result.vendorAddr} is the vendor address, and his name is ${result.vendorName}`;
         })
       })
        
        /*this._loginService.getData(requestOptions).then((response) =>{
          response.json().then((result)=>{
            console.log(result);
            console.log(result.response.rollno);
        })
      })*/
    
    }
  }

  

