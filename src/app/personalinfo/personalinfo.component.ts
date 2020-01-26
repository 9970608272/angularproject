import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() 
  {
    
  }
  onCancel(){
    this.router.navigate(["/photographer"])
   }
}
