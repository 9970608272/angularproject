import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  url = "http://localhost:8080/projectnew1";

  constructor(private http:HttpClient) { }

  AddBooking(booking: import("../model/booking").Booking) {

   return this.http.post(this.url+"/booking/addbooking", booking); 
   
  }



}
