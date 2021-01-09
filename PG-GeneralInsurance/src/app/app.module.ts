
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { MotorInsuranceComponent } from './motor-insurance/motor-insurance.component';
import { TravelInsuranceComponent } from './travel-insurance/travel-insurance.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './service/login.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterService } from './service/register.service';
import { RegisterComponent } from './register/register.component';
import { VehiclelistService } from './service/vehiclelist.service';
import { MotorInsuranceDetailsService } from './service/motorInsuranceDetails.service';
import { PolicyPreviewComponent } from './policy-preview/policy-preview.component';
import { PaymentComponent } from './payment/payment.component';
import { EstimateInsuranceComponent } from './estimate-insurance/estimate-insurance.component';
import { TravelInsuranceDetailsService } from './service/travelInsuranceDetails.service';
import { UserService } from './service/user.service';
import { TravelPaymentComponent } from './travel-payment/travel-payment.component';
import { TransactionService } from './service/transaction.service';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';
import { RenewalDisplayService } from './service/renewaldisp.service';
import { SelectyearComponent } from './selectyear/selectyear.component';
import { DashboardService } from './service/dashboard.service';
import { BrowserModule } from '@angular/platform-browser';
import { DummyComponent } from './dummy/dummy.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';



const routes:Routes=[
  {path:"", pathMatch:"full", redirectTo:"/home"},
  {path:"register",component:RegisterComponent},
  {path:"buy-insurance", component:BuyInsuranceComponent},
  {path:"motor-insurance", component:MotorInsuranceComponent},
  {path:"travel-insurance", component:TravelInsuranceComponent},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"policy-preview", component:PolicyPreviewComponent},
  {path:"estimate-insurance", component:EstimateInsuranceComponent},
  {path:"Renew-insurance", component:DisplaydetailsComponent},
  {path:'yearrenewal/:reg_number/:modelname/:manufacturer/:year',component:SelectyearComponent},
  {path:"user-dashboard",component:UserDashboardComponent},
  {path:'dummy', component:DummyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BuyInsuranceComponent,
    MotorInsuranceComponent,
    TravelInsuranceComponent,
    LoginComponent,
    RegisterComponent,
    PolicyPreviewComponent,
    PaymentComponent,
    EstimateInsuranceComponent,
    TravelPaymentComponent,
    DisplaydetailsComponent,
    SelectyearComponent,
    DummyComponent,
    UserDashboardComponent
   
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService,RegisterService,VehiclelistService,MotorInsuranceDetailsService, TravelInsuranceDetailsService,UserService,TransactionService, RenewalDisplayService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
