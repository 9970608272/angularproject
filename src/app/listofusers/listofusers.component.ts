import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../dataservices/admin-service.service';

@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})
export class ListofusersComponent implements OnInit {
  users:any;
  constructor(private as: AdminServiceService) {

   }

  ngOnInit() {

    let obsRes=this.as.SelectUsers();

    obsRes.subscribe((result)=>   {

      this.users= result;

    })

  }
}
