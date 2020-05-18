import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-data',
  template: `
  <div class="body">
    <div class="c-top">
    <div  class="headclass text-center "  style="margin-bottom:0px">
     <h2> Customer </h2>
    </div>
    
    </div>
    <hr/>
  <div class="container text-center mx-auto ">
    <div class="row ">
      <div class="col">
      <div class="card">
      <div class="zoom">
        <a rouetrLink="#">
          <img class="img-fluid  mx-auto d-block " src="assets/images/profileupdate.png" alt="profile update" width="100" height="236">
            <p class="text-center">Profile</p>
        </a>
      </div>
      </div>
      </div>
      <div class="col">
      <div class="card">
      <div class="zoom">
        <a rouetrLink="#">
          <img class="img-fluid mx-auto d-block" src="assets/images/dashboard.png" alt="Dashboard" width="100" height="236">
            <p class="text-center">Dashboard</p>
        </a>
      </div>
      </div>
      </div>
      <div class="col">
      <div class="card">
      <div class="zoom">
        <a rouetrLink="#">
          <img class="img-fluid mx-auto d-block " src="assets/images/financialsheet.png" alt="Financial Sheet" width="100" height="236"> 
            <p class="text-center">Financial Sheet</p>
        </a>
      </div>
      </div>
      </div>
    </div>
  </div>
  </div>
  
  `,
  styles: [
    `.body {
      padding:1px;
      height: 100%;
      margin-bottom: 0px;
      background:  rgba(23,23,23,0.6);
      color: whitesmoke;
      font-family: "Roboto",  sans-serif ;
  }
  hr{
    
    background: linear-gradient(to right, #7b4397,  #dc2430);
    margin:1px;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
    border: 0px;
    height: 1px;
}
.c-top{
    background:  rgba(23,23,23,0.6);
}
    .headclass{
    
      text-align:center;
      padding: 90px;
      font-family: "Roboto",  sans-serif ;
      background-color:  rgba(23,23,23,0.6);
      margin-bottom: 10px;
  }
  h2{
      color: whitesmoke;
     
  }a{
      text-decoration: none;
      color:  whitesmoke;
      background: #353C51;
      font-family: "Roboto",  sans-serif ;
      
  }
  p{
    color: whitesmoke;
}
 

.img-fluid {
    opacity: 1;
    display: block;
    
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  .container{
    padding: 0px 0px;
    margin-bottom: 11.6%;
    margin-top: 10%;
  }
  .card {
    /* Add shadows to 0 create the "card" effect */
   margin-top:0px;
   margin-left:20px;
   margin-right:20px;
   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background:  rgba(23,23,23,0.7);;
  }
  
  /* On mouse-over, add a deeper shadow */
  .card:hover {
    background: linear-gradient(to right, #7b4397,  #dc2430);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
    opacity: 0.7;
  }
  .card:hover p{
      opacity: 0.5;
  }
  
  .zoom {
    transition: transform .2s; /* Animation */
    padding:10px;
  }
  
  .zoom:hover {
    transform: scale(0.8); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
  `
  ]
})
export class CustomerDataComponent implements OnInit {
customer= [
 { "id":1 ,"name": "profile update"},
 { "id":2 ,"name": "dashboard"},
 { "id":3 ,"name": "financial sheet"}
]
display="flase";
  constructor() { }

  ngOnInit(): void {
  }

}
