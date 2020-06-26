import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common'

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
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeProfileEditComponent } from './employee/employee-profile-edit/employee-profile-edit.component';
import {EmployeeLeaveComponent} from './employee/employee-leave/employee-leave.component';
import { EmployeeLeaveRequestComponent } from './employee/employee-leave-request/employee-leave-request.component';
import {EmployeePayslipComponent} from './employee/employee-payslip/employee-payslip.component';
import {FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { VendorProfileComponent } from './vendor/vendor-profile/vendor-profile.component';
import { CustomerProfileEditComponent } from './customer/customer-profile-edit/customer-profile-edit.component';
import { VendorProfileEditComponent } from './vendor/vendor-profile-edit/vendor-profile-edit.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { QuotationComponent } from './vendor-dashboard/quotation/quotation.component';
import { PurchaseOrderComponent } from './vendor-dashboard/purchase-order/purchase-order.component';
import { GoodsReceiptComponent } from './vendor-dashboard/goods-receipt/goods-receipt.component';
import { VendorFinancialSheetComponent } from './vendor-financial-sheet/vendor-financial-sheet.component';
import { VendorInvoiceComponent } from './vendor-financial-sheet/vendor-invoice/vendor-invoice.component';
import { VendorPaymentOverdueComponent } from './vendor-financial-sheet/vendor-payment-overdue/vendor-payment-overdue.component';
import { VendorCreditMemoComponent } from './vendor-financial-sheet/vendor-credit-memo/vendor-credit-memo.component';
import { EhsmDashboardComponent } from './ehsm-dashboard/ehsm-dashboard.component';
import { EhsmIncidentManagementComponent } from './ehsm-dashboard/ehsm-incident-management/ehsm-incident-management.component';
import { EhsmRiskAssestmentComponent } from './ehsm-dashboard/ehsm-risk-assestment/ehsm-risk-assestment.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerFinancialSheetComponent } from './customer-financial-sheet/customer-financial-sheet.component';
import { CustomerInquiryDataComponent } from './customer-dashboard/customer-inquiry-data/customer-inquiry-data.component';
import { CustomerSalesOrderComponent } from './customer-dashboard/customer-sales-order/customer-sales-order.component';
import { CustomerListofDeliveryComponent } from './customer-dashboard/customer-listof-delivery/customer-listof-delivery.component';
import { CustomerInvoiceComponent } from './customer-financial-sheet/customer-invoice/customer-invoice.component';
import { CustomerPaymentsComponent } from './customer-financial-sheet/customer-payments/customer-payments.component';
import { CustomerCreditMemoComponent } from './customer-financial-sheet/customer-credit-memo/customer-credit-memo.component';
import { CustomerOverallSalesComponent } from './customer-financial-sheet/customer-overall-sales/customer-overall-sales.component';
import { EhsmIncidentCreateComponent } from './ehsm-incident-create/ehsm-incident-create.component';
import { EhsmIncidentChangeComponent } from './ehsm-incident-change/ehsm-incident-change.component';
import { AuthGuard } from './auth.guard';
import { GetdateComponent } from './getdate/getdate.component';




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
    EmployeeProfileComponent,
    EmployeeProfileEditComponent,
    EmployeeLeaveRequestComponent,
    EmployeeLeaveComponent,
    EmployeePayslipComponent,

    MaintanenceloginComponent,
    ShopfloorloginComponent,
    QualitycheckloginComponent,
    EhsmloginComponent,
    CustomerProfileComponent,
    VendorProfileComponent,
    CustomerProfileEditComponent,
    VendorProfileEditComponent,
    VendorDashboardComponent,
    QuotationComponent,
    PurchaseOrderComponent,
    GoodsReceiptComponent,
    VendorFinancialSheetComponent,
    VendorInvoiceComponent,
    VendorPaymentOverdueComponent,
    VendorCreditMemoComponent,
    EhsmDashboardComponent,
    EhsmIncidentManagementComponent,
    EhsmRiskAssestmentComponent,
    CustomerDashboardComponent,
    CustomerFinancialSheetComponent,
    CustomerInquiryDataComponent,
    CustomerSalesOrderComponent,
    CustomerListofDeliveryComponent,
    CustomerInvoiceComponent,
    CustomerPaymentsComponent,
    CustomerCreditMemoComponent,
    CustomerOverallSalesComponent,
    EhsmIncidentCreateComponent,
    EhsmIncidentChangeComponent,
    GetdateComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    CommonModule,


  ],
  providers: [],
  
  bootstrap: [AppComponent],
  entryComponents:[GetdateComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas,far);
  }
}
