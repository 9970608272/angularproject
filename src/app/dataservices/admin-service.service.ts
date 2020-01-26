import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  
  constructor(private http:HttpClient) { }


url = "http://localhost:8080/projectnew1";
  
SelectUsers()
{
  return this.http.get(this.url+"/user/getallusers");
}
SelectPhotographer()
{
  return this.http.get(this.url+"/photographer/allphotographer");
}
SelectCustomers()
{
  return this.http.get(this.url+"/customer/getallcustomers");
}
SelectBookingList()
{
  return this.http.get(this.url+"/booking/getallbooking");
}
SelectViewplan()
{
  return this.http.get(this.url+"/plan/getallplans");
}
  }
