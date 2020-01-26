import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../dataservices/admin-service.service';

@Component({
  selector: 'app-listofphotographers',
  templateUrl: './listofphotographers.component.html',
  styleUrls: ['./listofphotographers.component.css']
})
export class ListofphotographersComponent implements OnInit {

  Photographers:any;
  constructor(private as: AdminServiceService) {

   }

  ngOnInit() {

    let obsRes=this.as.SelectPhotographer();

    obsRes.subscribe(        (result)=>   {
        console.log(result);

      this.Photographers= result;

    })

  }


}
