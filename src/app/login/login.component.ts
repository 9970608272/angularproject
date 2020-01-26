// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })


//   export class LoginComponent implements OnInit {
//     email = '';
//     password = '';




//   constructor(
//     private router:Router) { }

//   ngOnInit() {
//   }
//    onSignup(){
//      this.router.navigate(["/register"])
//    }

//    onCancel(){
//      this.router.navigate(["/home"])
//     }
//     onLogin() {

//       if (this.email.length == 0) {
//         alert('enter email');
//       } else if (this.password.length ==0) {
//         alert('enter password');
//       } else {

//         if(this.email=='Admin')
//         {
//             sessionStorage['login_status'] = '1';
//             localStorage.setItem('email',this.email);
//             localStorage.setItem('flag','true');
//             this.router.navigate(['/admin']);
//         }
//         else if(this.email=='Photo')
//         {

//             sessionStorage['login_status'] = '1';
//             localStorage.setItem('email',this.email);
//             localStorage.setItem('flag','true');
//            // this.emtService.navBarSwitch(true);
//             this.router.navigate(['/photographer']);
//         }else if(this.email=='User')
//         {
//             sessionStorage['login_status'] = '1';
//             localStorage.setItem('email',this.email);
//             localStorage.setItem('flag','true');
//            // this.emtService.navBarSwitch(true);
//             this.router.navigate(['/user']);
//         }else{
//           alert("invalid login");
//           this.router.navigate(['']);
//         }

//       }
//     }
// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private service: AuthService, private router: Router) 
  {

  }

  ngOnInit() 
  {
  }

  SignIn(loginForm)
  {
    let loginCredentials = loginForm.form.value;
    console.log(loginCredentials);

     this.service.CheckCredentialsWithDB(loginCredentials);

   
    // let isUserValid= this.service.CheckCredentialsWithDB(loginCredentials);
    // console.log(isUserValid);
  
    // if(isUserValid !=null)
    // {
    //   console.log("User Is Valid");
      
    //   this.router.navigate(['/book']); 
    // }
    // else{
    //   this.message = "User Name / Password is Invalid!";
    // }
  }

  Signup()
  {
    this.router.navigate(['/register']);
  }
}


























