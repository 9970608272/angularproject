import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AddressService } from '../address.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  constructor( 
    private http:Router,
    private as: AddressService,
               private router: Router,
               private route:ActivatedRoute, 
               private auth: AuthService) { }
  role:any;
  id:any;
  ngOnInit() {

    this.role = this.auth.Role;

    this.id = this.auth.Id;
    console.log(this.role);
    console.log(this.id);

  }
  AddAddress(addressForm) {
    let address = addressForm.form.value;
    console.log(address);
    let obsRes;
    if(this.role === "PHOTOGRAPHER")
    {
      obsRes = this.as.AddPhotographerAddress(this.id, address); 
      obsRes.subscribe((result) => {
        console.log(result);
          this.router.navigate(["/photographer"]);
      });
    }
    else if(this.role === "CUSTOMER")
    {
      obsRes = this.as.AddCustomerAddress(this.id, address); 
      obsRes.subscribe((result) => {
        console.log(result);
          this.router.navigate(["/user"]);
      });
    }    
  }
}