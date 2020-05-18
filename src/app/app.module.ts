import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import{HttpClient, HttpClientModule} from '@angular/common/http'
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerloginFormComponent } from './customer/customerlogin-form/customerlogin-form.component';
import { FooterComponent } from './footer/footer.component';
import { VendorloginComponent } from './vendor/vendorlogin/vendorlogin.component';
import { CustomerDataComponent } from './customer/customer-data/customer-data.component';
import { EmployeeloginComponent } from './employee/employeelogin/employeelogin.component';
import { MaintanenceloginComponent } from './maintanence/maintanencelogin/maintanencelogin.component';
import { ShopfloorloginComponent } from './shopfloor/shopfloorlogin/shopfloorlogin.component';
import { QualitycheckloginComponent } from './qualitycheck/qualitychecklogin/qualitychecklogin.component';
import { EhsmloginComponent } from './ehsm/ehsmlogin/ehsmlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    HomeComponent,
    
    NavbarComponent,
    CustomerloginFormComponent,
    FooterComponent,
    VendorloginComponent,
    CustomerDataComponent,
    EmployeeloginComponent,
    MaintanenceloginComponent,
    ShopfloorloginComponent,
    QualitycheckloginComponent,
    EhsmloginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
FormsModule,

  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
