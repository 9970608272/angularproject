import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/model/booking';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  

  constructor(private router:Router) { }

  ngOnInit() {
  }

  AddDateTime(dt){

    let booking:Booking = JSON.parse(sessionStorage.getItem("booking"));
    
    booking.date = dt.date;

    booking.time = dt.time;

    sessionStorage.setItem("booking", JSON.stringify(booking));
    
    this.router.navigate(["/viewavailabilty"])
   }
}
