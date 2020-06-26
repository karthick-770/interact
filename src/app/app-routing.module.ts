import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDataComponent } from './customer/customer-data/customer-data.component';
import {  CustomerProfileComponent} from './customer/customer-profile/customer-profile.component';
import { CustomerProfileEditComponent} from './customer/customer-profile-edit/customer-profile-edit.component';
import { VendorDataComponent } from './vendor/vendor-data/vendor-data.component';
import { VendorProfileComponent } from './vendor/vendor-profile/vendor-profile.component';
import { VendorProfileEditComponent } from './vendor/vendor-profile-edit/vendor-profile-edit.component';
import { EmployeeDataComponent } from './employee/employee-data/employee-data.component';
import {EmployeeloginComponent} from './employee/employeelogin/employeelogin.component';
import { MaintenanceDataComponent } from './maintanence/maintenance-data/maintenance-data.component';
import {MaintanenceloginComponent} from './maintanence/maintanencelogin/maintanencelogin.component';
import { ShopfloorDataComponent } from './shopfloor/shopfloor-data/shopfloor-data.component';
import {ShopfloorloginComponent} from './shopfloor/shopfloorlogin/shopfloorlogin.component'
import { EhsmDataComponent } from './ehsm/ehsm-data/ehsm-data.component';
import {EhsmloginComponent} from './ehsm/ehsmlogin/ehsmlogin.component';
import { EhsmDashboardComponent } from './ehsm-dashboard/ehsm-dashboard.component';
import { EhsmIncidentManagementComponent } from './ehsm-dashboard/ehsm-incident-management/ehsm-incident-management.component';
import { EhsmRiskAssestmentComponent } from './ehsm-dashboard/ehsm-risk-assestment/ehsm-risk-assestment.component';
import {EhsmIncidentCreateComponent} from './ehsm-incident-create/ehsm-incident-create.component';
import {EhsmIncidentChangeComponent} from './ehsm-incident-change/ehsm-incident-change.component';
import { QualitycheckDataComponent } from './qualitycheck/qualitycheck-data/qualitycheck-data.component';
import {QualitycheckloginComponent} from './qualitycheck/qualitychecklogin/qualitychecklogin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{VendorloginComponent} from './vendor/vendorlogin/vendorlogin.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerloginFormComponent } from './customer/customerlogin-form/customerlogin-form.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerFinancialSheetComponent } from './customer-financial-sheet/customer-financial-sheet.component';
import { CustomerInquiryDataComponent } from './customer-dashboard/customer-inquiry-data/customer-inquiry-data.component';
import { CustomerSalesOrderComponent } from './customer-dashboard/customer-sales-order/customer-sales-order.component';
import { CustomerListofDeliveryComponent } from './customer-dashboard/customer-listof-delivery/customer-listof-delivery.component';
import { CustomerInvoiceComponent } from './customer-financial-sheet/customer-invoice/customer-invoice.component';
import { CustomerPaymentsComponent } from './customer-financial-sheet/customer-payments/customer-payments.component';
import { CustomerCreditMemoComponent } from './customer-financial-sheet/customer-credit-memo/customer-credit-memo.component';
import { CustomerOverallSalesComponent } from './customer-financial-sheet/customer-overall-sales/customer-overall-sales.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeLeaveComponent } from './employee/employee-leave/employee-leave.component';
import {EmployeeLeaveRequestComponent} from './employee/employee-leave-request/employee-leave-request.component'
import { EmployeePayslipComponent } from './employee/employee-payslip/employee-payslip.component';
import { EmployeeProfileEditComponent } from './employee/employee-profile-edit/employee-profile-edit.component';
import { AuthGuard } from './auth.guard';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { PurchaseOrderComponent } from './vendor-dashboard/purchase-order/purchase-order.component';
import { QuotationComponent } from './vendor-dashboard/quotation/quotation.component';
import { GoodsReceiptComponent } from './vendor-dashboard/goods-receipt/goods-receipt.component';
import { VendorFinancialSheetComponent } from './vendor-financial-sheet/vendor-financial-sheet.component';
import { VendorInvoiceComponent } from './vendor-financial-sheet/vendor-invoice/vendor-invoice.component';
import { VendorPaymentOverdueComponent } from './vendor-financial-sheet/vendor-payment-overdue/vendor-payment-overdue.component';
import { VendorCreditMemoComponent } from './vendor-financial-sheet/vendor-credit-memo/vendor-credit-memo.component';
import { GetdateComponent } from './getdate/getdate.component';



const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'',redirectTo:'/home',pathMatch: 'full'},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {
    path:'customerlogin/customer/customerdashboard',
    component: CustomerDashboardComponent,
    children:[
      {path:'inquirydata',component: CustomerInquiryDataComponent},
      {path:'salesorder',component: CustomerSalesOrderComponent},
      {path:'listofdeliveries',component: CustomerListofDeliveryComponent}
    ]
  },
  {
    path:'customerlogin/customer/customerfinancialsheet',
    component: CustomerFinancialSheetComponent,
    children:[
      {path:'invoice',component: CustomerInvoiceComponent},
      {path:'paymentsandaging',component: CustomerPaymentsComponent},
      {path:'creditmemo',component: CustomerCreditMemoComponent},
      {path:'overallsales',component: CustomerOverallSalesComponent}
    ]
  },
  {path:'customerlogin/customer/customerprofile',component:CustomerProfileComponent },
  {path:'customerlogin/customer/customerprofile/customerprofileedit',component:CustomerProfileEditComponent }, 
  {path:'customerlogin/customer',component: CustomerDataComponent, canActivate:[AuthGuard]},
  {path:'customerlogin',component: CustomerloginFormComponent},
  {
    path:'vendorlogin/vendor/vendordashboard',
    component: VendorDashboardComponent,
    children:[
      {path:'purchaseorder',component: PurchaseOrderComponent},
      {path:'quotation',component: QuotationComponent},
      {path:'goodsreceipt',component: GoodsReceiptComponent},
      {path:'getdate',component: GetdateComponent}
    ]
  },
  {
    path:'vendorlogin/vendor/vendorfinancialsheet',
    component: VendorFinancialSheetComponent,
    children:[
      {path:'invoicedetails',component: VendorInvoiceComponent},
      {path:'paymentoverdues',component: VendorPaymentOverdueComponent},
      {path:'creditmemo',component: VendorCreditMemoComponent}
    ]
  },
  {path:'vendorlogin/vendor/vendorprofile',component:VendorProfileComponent },
  {path:'vendorlogin/vendor/vendorprofile/vendorprofileedit',component:VendorProfileEditComponent},
  {path:'vendorlogin/vendor',component: VendorDataComponent},
  {path:'vendorlogin',component:VendorloginComponent},
  {path:'employeelogin/employee/employeeprofile',component:EmployeeProfileComponent},
  {path:'employeelogin/employee/employeeprofile/employeeprofileedit',component:EmployeeProfileEditComponent},
  {path:'employeelogin/employee/employeeleave/employeeleaverequest',component:EmployeeLeaveRequestComponent},
  {path:'employeelogin/employee/employeeleave',component:EmployeeLeaveComponent},
  {path:'employeelogin/employee/employeesalaryslip',component:EmployeePayslipComponent},
  {path:'employeelogin/employee',component: EmployeeDataComponent},
  {path:'employeelogin',component:EmployeeloginComponent},
  {path:'maintanencelogin/maintanence',component: MaintenanceDataComponent},
  {path:'maintanencelogin',component: MaintanenceloginComponent},
  {path:'shopfloorlogin/shopfloor',component: ShopfloorDataComponent},
  {path:'shopfloorlogin',component:ShopfloorloginComponent},
  {path:'ehsmlogin/ehsm/ehsmdashboard/incidents/createincident',component: EhsmIncidentCreateComponent},
  {path:'ehsmlogin/ehsm/ehsmdashboard/incidents/changeincident',component: EhsmIncidentChangeComponent},
  {
    path:'ehsmlogin/ehsm/ehsmdashboard',
    component: EhsmDashboardComponent,
    children:[
      {path:'incidents',component: EhsmIncidentManagementComponent},
      {path:'risks',component: EhsmRiskAssestmentComponent},
      
    ]
  },
  {path:'ehsmlogin/ehsm',component: EhsmDataComponent,canActivate:[AuthGuard]},
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
                                  CustomerDataComponent,CustomerProfileComponent,CustomerProfileEditComponent,
                                  CustomerDashboardComponent,CustomerInquiryDataComponent,CustomerSalesOrderComponent,CustomerListofDeliveryComponent,
                                  CustomerFinancialSheetComponent,CustomerInvoiceComponent,CustomerPaymentsComponent,CustomerCreditMemoComponent,CustomerOverallSalesComponent,
                                  VendorDataComponent,VendorloginComponent,VendorProfileComponent,VendorProfileEditComponent,VendorDashboardComponent,
                                  PurchaseOrderComponent,QuotationComponent,GoodsReceiptComponent,GetdateComponent,
                                  VendorFinancialSheetComponent,VendorInvoiceComponent,VendorPaymentOverdueComponent,VendorCreditMemoComponent,
                                  EmployeeDataComponent,EmployeeloginComponent,EmployeeProfileComponent,EmployeeProfileEditComponent,EmployeeLeaveComponent,
                                  EmployeeLeaveRequestComponent,EmployeePayslipComponent,MaintenanceDataComponent,
                                  MaintanenceloginComponent,ShopfloorDataComponent,ShopfloorloginComponent,
                                  EhsmDataComponent,EhsmloginComponent,EhsmDashboardComponent,EhsmIncidentManagementComponent,EhsmRiskAssestmentComponent,
                                  EhsmIncidentCreateComponent,EhsmIncidentCreateComponent,
                                  QualitycheckDataComponent,QualitycheckloginComponent,
                                  PageNotFoundComponent,FooterComponent]
