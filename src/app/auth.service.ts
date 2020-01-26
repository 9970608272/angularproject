// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate
{
  dbuser:any={};
  baseUrl="http://localhost:8080/projectnew1/user/login"

  loginsuc=false;

  constructor(private router:Router, public http: HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
   if(this.IsLoggedIn())
   {
     console.log("User Has Logged in");
     return true;
   }
   else
   {
    console.log("User Has not Logged in");
     this.router.navigate(['/login']);
     return false;  
   }
  }

  IsLoggedIn()
  {
    
    if(window.sessionStorage.getItem("isActive")!=null 
        && 
       (window.sessionStorage.getItem("isActive")=="1" || window.sessionStorage.getItem("isActive")=="2"))
    {
      console.log("user logged successfully");
      return true;
    }
    else{
      this.loginsuc = true;
      return false;

    }
  }

  CheckCredentialsWithDB(credentials)
  {
    console.log(credentials);

    let obsRes = this.http.post(this.baseUrl,credentials);
    obsRes.subscribe((result)=>{

      this.dbuser = result;

      if(this.dbuser.role == "ADMIN")
      {
        window.sessionStorage.setItem("isActive", "1");
        sessionStorage.setItem("user",JSON.stringify(this.dbuser));
        this.router.navigate(['/admin']);
        return true;
      }
      else if(this.dbuser.role == "PHOTOGRAPHER")
      {
        window.sessionStorage.setItem("isActive", "2");
        sessionStorage.setItem("user",JSON.stringify(this.dbuser));
        this.router.navigate(['/photographer']);
        return true;
      }
      else if(this.dbuser.role == "CUSTOMER")
      {
        window.sessionStorage.setItem("isActive", "3");
        sessionStorage.setItem("user",JSON.stringify(this.dbuser));
        this.router.navigate(['/user']);
        return true;
      }
      else
      {
       // window.sessionStorage.setItem("isActive", "0");
       // this.router.navigate(['login']);
        return false;
      }
      return false;
    })
  }


  get Role() {
    let lu:any = sessionStorage.getItem("user");
    lu = JSON.parse(lu);
    return lu.role;
  }

  get Id() {
    let lu:any = sessionStorage.getItem("user");
    lu = JSON.parse(lu);
    return lu.id;
  }

  Logout()
  {
    window.sessionStorage.setItem("isActive", "0");
    this.router.navigate(['/login']);
  }

}