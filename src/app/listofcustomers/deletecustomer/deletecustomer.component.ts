import { Component, OnInit } from '@angular/core';

import { CustomerservicesService } from 'src/app/dataservices/customerservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.css']
})
export class DeletecustomerComponent implements OnInit {
No:string;
  constructor(private route: ActivatedRoute,
    private ds: CustomerservicesService,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result) => {

      this.No = result.get("customerId");
      console.log(this.No);

      let observableresult = this.ds.RemoveCustomerById(this.No);

      observableresult.subscribe((result) => {

        console.log(result);

        setTimeout(() => {
          this.router.navigate(['/listofcustomers']);
        },
          2000);

      })
    })












  }

}
