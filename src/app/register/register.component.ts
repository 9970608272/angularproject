import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerservicesService } from '../dataservices/customerservices.service';
import { PhotographerserviceService } from '../dataservices/photographerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(  private router:Router, private cs:CustomerservicesService,
    private ps:PhotographerserviceService
    ) { }

  ngOnInit() {
  }

  regId:any;

  SignUp(registerForm)
  {
    let user:any = registerForm.form.value;
    console.log(user);

    if(user.role=="PHOTOGRAPHER")
    {
      let obsRes = this.ps.AddPhotographer(user);

      obsRes.subscribe((cust:any)=>{
        this.regId = cust.custId;
        this.router.navigate(["/login"])
      })
    }
    else if(user.role=="CUSTOMER")
    {
      let obsRes = this.cs.AddCustomer(user);

      obsRes.subscribe((cust:any)=>{
        this.regId = cust.custId;
        this.router.navigate(["/login"])
      })
    }
  }

  onCancel(){
    this.router.navigate(["/login"])
   }
}
