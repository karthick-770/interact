import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-expand-md navbar-dark">
  <a id="logo" routerLink = "/home" routerLinkActive="active" ></a>
  <a  id="app-name" routerLink = "/home" routerLinkActive="active" >Interact</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" (click)="toggleNavbar()" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-align = center" [ngClass]="{ 'show': navbarOpen }" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" routerLink = "/customerlogin" routerLinkActive="active">Customer </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  routerLink = "/vendorlogin" routerLinkActive="active">Vendor </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink = "/employeelogin" routerLinkActive="active">Employee </a>
        </li>    
  <li class="nav-item">
          <a class="nav-link" routerLink = "/maintanencelogin" routerLinkActive="active">Maintanence </a>
        </li>
  <li class="nav-item">
          <a class="nav-link" routerLink = "/shopfloorlogin" routerLinkActive="active">Shop floor </a>
        </li>
  <li class="nav-item">
          <a class="nav-link" routerLink = "/ehsmlogin" routerLinkActive="active">EHSM </a>
        </li>
  <li class="nav-item">
          <a class="nav-link" routerLink = "/qualitychecklogin" routerLinkActive="active">Quality check </a>
        </li>
      </ul>
    </div>  
  </nav>
  

  `,
  styles: [
`
#logo{
  width: 34px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 30px;
    font-size: 0;
    background-size: 34px 20px;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: 0 14px;
    background-image: url("D:\angular\mysapwebpage\src\assets\images\sclogo.png");
    opacity: 1;
    border-bottom: none;
}
#app-name {
  font-size: 30px;
  display:inline-block;
  text-transform: ;
  color: var(--pink);
  
}
.navbar{
  font-family: "Roboto",  sans-serif ;
  font-size:1rem;
  padding:0px;
  background-color: rgba(23,23,23,0.9);
  backdrop-filter: blur(10px);
  height: 61px;
    background-image: none;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    /* transition: background-color 0.4s, color 0.2s, -webkit-backdrop-filter 0.2s, backdrop-filter 0.2s, box-shadow 0.4s; */
    background-color: rgba(13,13,13,0.75);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
}
.navbar a{
  padding:10px;
}
li a {
  padding: 14px 6px;
  margin: 0 8px;
  display: inline-block;
  color: #999;
  transition: color 0.2s, opacity 0.2s;

}

a {
  text-decoration: none;
  color: #000;
  transition: color 0.2s, border-bottom 0.2s;
}
.navbar a.active {
  
  text-decoration:none;
  font-family: "Roboto",  sans-serif ;
  color: #ffffff;
}
.navbar a:hover {
 
  color: white;
  text-decoration:none;
  font-family: "Roboto",  sans-serif ;
  
}

.navbar-link{
  padding:0px;
}
.nav-item{
  float:right;
}
nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.collapse.show{
  
    background-color: rgba(23,23,23,0.9);
    backdrop-filter: blur(10px);
      background-image: none;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      /* transition: background-color 0.4s, color 0.2s, -webkit-backdrop-filter 0.2s, backdrop-filter 0.2s, box-shadow 0.4s; */
      background-color: rgba(13,13,13,0.75);
      border-bottom: 1px solid rgba(255, 255, 255, 0);
  
}
.navbar-toggler{
  margin-right:4px;
  border:1px solid var(--pink) ;
}
@media screen and (max-device-width: 480px) {
  #app-name {
    font-size: 28px;
  
    text-transform: ;
    color: var(--pink);
  }
  .navbar{
    font-family: "Roboto",  sans-serif ;
    font-size:0.7rem;
    padding:0px;
    background-color: rgba(23,23,23,0.9);
    backdrop-filter: blur(10px);
    height: 56px;
      background-image: none;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      /* transition: background-color 0.4s, color 0.2s, -webkit-backdrop-filter 0.2s, backdrop-filter 0.2s, box-shadow 0.4s; */
      background-color: rgba(13,13,13,0.75);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
  .navbar a{
    padding:10px;
  }
  li a {
    padding: 14px 6px;
    margin: 0 8px;
    display: inline-block;
    color: #999;
    transition: color 0.2s, opacity 0.2s;
  
  }
  
  a {
    text-decoration: none;
    color: #000;
    transition: color 0.2s, border-bottom 0.2s;
  }
  .navbar a.active {
    
    text-decoration:none;
    font-family: "Roboto",  sans-serif ;
    color: #ffffff;
  }
  .navbar a:hover {
   
    color: white;
    text-decoration:none;
    font-family: "Roboto",  sans-serif ;
    
  }
  
  .navbar-link{
    padding:0px;
  }
  .nav-item{
    float:right;
  }
  nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  
  .collapse.show{
    
      background-color: rgba(23,23,23,0.9);
      backdrop-filter: blur(10px);
        background-image: none;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        /* transition: background-color 0.4s, color 0.2s, -webkit-backdrop-filter 0.2s, backdrop-filter 0.2s, box-shadow 0.4s; */
        background-color: rgba(13,13,13,0.75);
        border-bottom: 1px solid rgba(255, 255, 255, 0);
    
  }
  .navbar-toggler{
    margin-right:4px;
    border:1px solid var(--pink) ;
    padding: .18rem .50rem;
  }
  .navbar-toggler-icon{
    width: 1.1em;
    height: 1.1em;
  }
  
}
@media screen and (max-device-width: 768px) {
  #app-name {
    font-size: 20px;
  
    text-transform: ;
    color: var(--pink);
  }
  .navbar{
    font-family: "Roboto",  sans-serif ;
    font-size:0.8rem;
    padding:0px;
    background-color: rgba(23,23,23,0.9);
    backdrop-filter: blur(10px);
    height: 58px;
      background-image: none;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      /* transition: background-color 0.4s, color 0.2s, -webkit-backdrop-filter 0.2s, backdrop-filter 0.2s, box-shadow 0.4s; */
      background-color: rgba(13,13,13,0.75);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
  .navbar a{
    padding:10px;
  }
  li a {
    padding: 14px 6px;
    margin: 0 8px;
    display: inline-block;
    color: #999;
    transition: color 0.2s, opacity 0.2s;
  
  }
  
  a {
    text-decoration: none;
    color: #000;
    transition: color 0.2s, border-bottom 0.2s;
  }
  .navbar a.active {
    
    text-decoration:none;
    font-family: "Roboto",  sans-serif ;
    color: #ffffff;
  }
  .navbar a:hover {
   
    color: white;
    text-decoration:none;
    font-family: "Roboto",  sans-serif ;
    
  }
  
  .navbar-link{
    padding:0px;
  }
  .nav-item{
    float:right;
  }
  nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  
  .collapse.show{
    
      background-color: rgba(23,23,23,0.9);
      backdrop-filter: blur(10px);
        background-image: none;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        /* transition: background-color 0.4s, color 0.2s, -webkit-backdrop-filter 0.2s, backdrop-filter 0.2s, box-shadow 0.4s; */
        background-color: rgba(13,13,13,0.75);
        border-bottom: 1px solid rgba(255, 255, 255, 0);
    
  }
  .navbar-toggler{
    margin-right:4px;
    border:1px solid var(--pink) ;
    padding: .20rem .60rem;
  }
  .navbar-toggler-icon{
    width: 1.3em;
    height: 1.3em;
  }

}
`

  ]
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;}
  constructor() { }

  ngOnInit(): void {
  }

}
