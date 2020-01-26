import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerservicesService {


  constructor(private http:HttpClient) { }

  url = "http://localhost:8080/projectnew1";
  
  AddCustomer(user: any) {
    return this.http.post(this.url+"/customer/addCustomer", user);
  }
  
  RemoveCustomerById(No:any)
  {
    return this.http.delete(this.url+"/customer/deletecustomerbyid/"+ No);
  }


}
