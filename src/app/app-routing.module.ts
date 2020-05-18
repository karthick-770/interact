import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDataComponent } from './customer/customer-data/customer-data.component';
import { VendorDataComponent } from './vendor/vendor-data/vendor-data.component';
import { EmployeeDataComponent } from './employee/employee-data/employee-data.component';
import {EmployeeloginComponent} from './employee/employeelogin/employeelogin.component';
import { MaintenanceDataComponent } from './maintanence/maintenance-data/maintenance-data.component';
import {MaintanenceloginComponent} from './maintanence/maintanencelogin/maintanencelogin.component';
import { ShopfloorDataComponent } from './shopfloor/shopfloor-data/shopfloor-data.component';
import {ShopfloorloginComponent} from './shopfloor/shopfloorlogin/shopfloorlogin.component'
import { EhsmDataComponent } from './ehsm/ehsm-data/ehsm-data.component';
import {EhsmloginComponent} from './ehsm/ehsmlogin/ehsmlogin.component';
import { QualitycheckDataComponent } from './qualitycheck/qualitycheck-data/qualitycheck-data.component';
import {QualitycheckloginComponent} from './qualitycheck/qualitychecklogin/qualitychecklogin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{VendorloginComponent} from './vendor/vendorlogin/vendorlogin.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerloginFormComponent } from './customer/customerlogin-form/customerlogin-form.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'',redirectTo:'/home',pathMatch: 'full'},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'customerlogin/customer',component: CustomerDataComponent},
  {path:'customerlogin',component: CustomerloginFormComponent}, 
  {path:'vendorlogin/vendor',component: VendorDataComponent},
  {path:'vendorlogin',component:VendorloginComponent},
  {path:'employeelogin/employee',component: EmployeeDataComponent},
  {path:'employeelogin',component:EmployeeloginComponent},
  {path:'maintanencelogin/maintanence',component: MaintenanceDataComponent},
  {path:'maintanencelogin',component: MaintanenceloginComponent},
  {path:'shopfloorlogin/shopfloor',component: ShopfloorDataComponent},
  {path:'shopfloorlogin',component:ShopfloorloginComponent},
  {path:'ehsmlogin/ehsm',component: EhsmDataComponent},
  {path:'ehsmlogin',component:EhsmloginComponent},
  {path:'qualitychecklogin/qualitycheck',component: QualitycheckDataComponent},
  {path:'qualitychecklogin',component:QualitycheckloginComponent},
 {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 

  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,NavbarComponent,CustomerloginFormComponent,
                                  CustomerDataComponent,VendorDataComponent,VendorloginComponent,
                                  EmployeeDataComponent,EmployeeloginComponent,MaintenanceDataComponent,
                                  MaintanenceloginComponent,ShopfloorDataComponent,ShopfloorloginComponent,
                                  EhsmDataComponent,EhsmloginComponent,
                                  QualitycheckDataComponent,QualitycheckloginComponent,
                                  PageNotFoundComponent,FooterComponent]
