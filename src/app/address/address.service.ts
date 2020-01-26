import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private http:HttpClient) { }
  url = "http://localhost:8080/projectnew1";
  AddCustomerAddress(id: any, address: any): any 
  
  {
    return this.http.post(this.url+"/customer/addCustomerAddress/",id,address);
  }

  AddPhotographerAddress(id: any, address: any): any
  
  {
   
    return this.http.post(this.url+"/photographer/addPhotographerAddress/",id,address);
  }
   
  }
 

