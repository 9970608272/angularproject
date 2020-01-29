import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../dataservices/admin-service.service';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {
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
