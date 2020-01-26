import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../dataservices/admin-service.service';
import { Router } from '@angular/router';
import { Booking } from '../model/booking';
import { BookingService } from '../dataservices/booking.service';

@Component({
  selector: 'app-viewavailabilty',
  templateUrl: './viewavailabilty.component.html',
  styleUrls: ['./viewavailabilty.component.css']
})
export class ViewavailabiltyComponent implements OnInit {
  Photographers: any;

  booking:Booking;


  constructor(private router: Router,
    private as: AdminServiceService,
    private bs: BookingService) {

  }

  ngOnInit() {
    let obsRes = this.as.SelectPhotographer();
    obsRes.subscribe((result) => {
      console.log(result);
      this.Photographers = result;
    })
  }

  onView() {
    this.router.navigate(["/viewplan"])
  }
  onGallary() {
    this.router.navigate(["/gallary"])
  }
  Book(ph) {
    let cust = JSON.parse(sessionStorage.getItem("user"));
   this.booking=JSON.parse(sessionStorage.getItem("booking"));
    this.booking.customer = cust;
    this.booking.photographer = ph;
    sessionStorage.setItem("booking", JSON.stringify(this.booking));
    console.log(this.booking);
    let or = this.bs.AddBooking(this.booking);
    or.subscribe((result) => {
      console.log(result)
    })
  }
}
