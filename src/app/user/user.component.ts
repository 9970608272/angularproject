import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  booking: Booking;

  constructor() { }

  ngOnInit() {
    this.booking = new Booking();
    sessionStorage.setItem("booking", JSON.stringify(this.booking));
  }

}
