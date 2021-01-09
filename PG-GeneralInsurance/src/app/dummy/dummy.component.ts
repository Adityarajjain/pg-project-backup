import { Component, OnInit } from '@angular/core';
import { MotorClaimTable } from '../model/motorClaimTable';
import { UserDetails } from '../model/user';
import { ApproveMotorClaimService } from '../service/approveMotorClaim.service';
import { DashboardService } from '../service/dashboard.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  arr=[1,2,3,4];
  
  Username:string;
  user:UserDetails;
  travelinsurances:any;
  motorinsurances:any;
  motorclaims:any;
  policy_id:any;
  amt:any;
 
  constructor(private userService:UserService, private dashboardService:DashboardService, private approveMotorClaim:ApproveMotorClaimService) { 
    this.user=new UserDetails();
    // this.motorinsurances=new MotorInsuranceTable();
    // this.travelinsurances= new TravelInsuranceTable();
    this.userService.getUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.user=data as UserDetails; console.log(data)});
    this.Username=this.user.Name;
    
    dashboardService.getAllClaimsOfUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.motorclaims=data as MotorClaimTable; console.log(data.Policy_Id)})
    dashboardService.getAllPoliciesOfUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.motorinsurances=data; console.log(this.motorinsurances[0].Mobile_Number)});
    dashboardService.getAllTravelPoliciesOfUser(sessionStorage.getItem("userMobile")!).subscribe((data:any)=>{this.travelinsurances=data; console.log(data)});
  }

  ngOnInit(): void {
  }

  approve(){
    //  this.amt = document.getElementById("amt")?.nodeValue;
    // console.log('pid: '+this.motorclaims );
    this.approveMotorClaim.approveMotorClaim(10000010055,this.amt,'Shalini').subscribe(data=>{console.log(data)});
  }

}
