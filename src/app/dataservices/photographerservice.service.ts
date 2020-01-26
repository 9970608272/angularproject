import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotographerserviceService {
 
  constructor(private http:HttpClient) { }


  url = "http://localhost:8080/projectnew1";


  AddPhotographer(user: any) {
    return this.http.post(this.url+"/photographer/addphotographer", user);
  }





  
  AddPhotographerDetails(photographer:any)
  {
    return this.http.post(this.url+"/photographer/addphotographer",photographer);
  }
 DeletePhotographerbyId(No:any)
  {
    return this.http.get(this.url+"/photographer/deletephotobyid/"+ No);
  }
  UpdatePhotographer(photographer:any)
  {
    return this.http.post(this.url+"/photographer/updatephoto",photographer);
  }
  
  GetPhotographerById(No: any) {
    return this.http.get(this.url + "/photographer/getphotographerById/"+ No);
  }

 

}
