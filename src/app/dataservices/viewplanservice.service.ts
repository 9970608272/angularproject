import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewplanserviceService {

  constructor(private http:HttpClient) { }


  url = "http://localhost:8080/projectnew1";
  
  AddPhotographerDetails(photographer:any)
  {
    return this.http.post(this.url+"/photographer/addphotographer",photographer);
  }
 DeletePlanbyId(No:any)
  {
    return this.http.get(this.url+"/plan/deleteplanbyid/"+ No);
  }
  UpdatePhotographer(photographer:any)
  {
    return this.http.post(this.url+"/photographer/updatephoto",photographer);
  }
  
  GetPhotographerById(No: any) {
    return this.http.get(this.url + "/photographer/getphotographerById/"+ No);
  }

 
}
