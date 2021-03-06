import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../dataservices/admin-service.service';
import { Booking } from '../model/booking';
import { Plan } from '../model/plan';
import { FunctionType } from '../model/FType';
@Component({
  selector: 'app-viewplan',
  templateUrl: './viewplan.component.html',
  styleUrls: ['./viewplan.component.css']
})
export class ViewplanComponent implements OnInit {
  pls: any;

 

  constructor(private router: Router, private as: AdminServiceService) { }

  ngOnInit() {
    let obsRes = this.as.SelectViewplan();
    obsRes.subscribe((result) => {
      console.log(result);
      this.pls = result;
    })
  }

  SelectPlan(chplan){

    console.log(chplan)

    let booking:Booking = JSON.parse(sessionStorage.getItem("booking"));

    booking.plan = chplan;
    
    console.log(booking.plan)

    sessionStorage.setItem("booking", JSON.stringify(booking));
    this.router.navigate(["/viewavailabilty"])
  }
}




