import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pid } from 'process';

@Injectable({
  providedIn: 'root'
})
export class PhotographerserviceService {
   
  constructor(private http:HttpClient) { }

  url = "http://localhost:8080/projectnew1";

  AddPhotographer(user: any) {
    return this.http.post(this.url+"/photographer/addphotographer", user);
  }

  GetImagesByPhotographer(id: number) {
    return this.http.post(this.url+"/photographer/getImagesByph", id);
  }

  AddPhotographerDetails(photographer:any)
  {
    return this.http.post(this.url+"/photographer/addphotographer",photographer);
  }
  DeleteUserbyId(No:any)
  {
    return this.http.delete(this.url+"/user/deleteuserbyid/"+ No);
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

  addImage(pid,fd){
   return this.http.post(this.url+"/photographer/addimage/"+pid,fd);
  }

}
