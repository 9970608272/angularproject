import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookingstatus',
  templateUrl: './bookingstatus.component.html',
  styleUrls: ['./bookingstatus.component.css']
})
export class BookingstatusComponent implements OnInit {
  photo:any;
  constructor() { 

    this.photo = [
      {"Id":4,"Name" : "user", "Phoneno": 3415612345,"status":'true'},
      {"Id":3,"Name" : "user1", "Phoneno": 2333647231,"status":'true'},
     
      
    ];




  }

  ngOnInit() {
  }

}
