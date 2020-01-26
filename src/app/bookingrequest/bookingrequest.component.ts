import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../dataservices/admin-service.service';

@Component({
  selector: 'app-bookingrequest',
  templateUrl: './bookingrequest.component.html',
  styleUrls: ['./bookingrequest.component.css']
})
export class BookingrequestComponent implements OnInit {
  photographers:any;
  constructor(private as: AdminServiceService) { 



  }

  ngOnInit() {

    let obsRes=this.as.SelectBookingList();

    obsRes.subscribe(        (result)=>   {
        console.log(result);

      this.photographers= result;

    })

  }


  }


