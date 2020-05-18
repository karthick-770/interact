import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-data',
  template: `
  <div class="body">
    <div class="c-top">
    <div  class="headclass text-center "  style="margin-bottom:0px">
     <h2> Maintanence</h2>
    </div>
    
    </div>
    <hr/>
  <div class="container  text-center mx-auto">
  <div class="row justify-content-center">
   <div class="col">
   <div class="card">
      <div class="zoom">
  <a routerLink="#">
  <img class="img-fluid mx-auto d-block" src="assets/images/maintanencedashboard.png" alt="profile update" width="100" height="336">
  <p class="text-center">Maintenance Employee Dashboard</p>
  </a>
  </div>
  </div>
  </div></div>
  </div>
  </div>
  `,
  styles: [
    `.body {
      padding:1px;
      height: 100%;
      margin-bottom: 5px;
      background: #353C51;
      color: whitesmoke;
      font-family: "Roboto",  sans-serif ;
  }
  .col{
    -webkit-box-flex: 0;
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
  }
  hr{
    
    background:  linear-gradient(-45deg, #57cfb0, #2ab5d3);
    margin:1px;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
    border: 0px;
    height: 1px;
}
.c-top{
    background: #353C51;
}
    .headclass{
    
      text-align:center;
      padding: 40px;
      font-family: "Roboto",  sans-serif ;
      background-color: #353C51;
      margin-bottom: 10px;
  }
  h2{
      color: whitesmoke;
     
  }
  a{
      text-decoration: none;
      color:  whitesmoke;
      background: #353C51;
      font-family: "Roboto",  sans-serif ;
      
  }
  p{
    color: whitesmoke;
}

.container{
  padding: 0px 0px;
  margin-bottom: 11.6%;
  margin-top: 10%;
}
.img-fluid {
    opacity: 1;
    display: block;
    
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  .card {
    /* Add shadows to 0 create the "card" effect */
   margin-top:0px;
   margin-left:20px;
   margin-right:20px;
   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: #353C51;
  }
  
  /* On mouse-over, add a deeper shadow */
  .card:hover {
    background: linear-gradient(-45deg, #57cfb0, #2ab5d3);
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
  }`
  ]
})
export class MaintenanceDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
