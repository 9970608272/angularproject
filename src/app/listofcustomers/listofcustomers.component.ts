import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../dataservices/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listofcustomers',
  templateUrl: './listofcustomers.component.html',
  styleUrls: ['./listofcustomers.component.css']
})
export class ListofcustomersComponent implements OnInit {
  customers:any;
  constructor(private sc: AdminServiceService,private router:Router) {

   }

  ngOnInit() {

    let obsRes=this.sc.SelectCustomers();

    obsRes.subscribe((result)=>   {
      console.log(result);
      this.customers= result;

    })

   
  }

}
