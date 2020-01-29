import { Component, OnInit } from '@angular/core';
import { Photographer } from '../model/photographer';
import { PhotographerserviceService } from '../dataservices/photographerservice.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  pid :number;
  
  selectedfile:File=null;
  
  constructor(private service:PhotographerserviceService) { }

  ngOnInit() {
  }
  
  onselect(event)
  {
    this.selectedfile=<File>event.target.files[0];
    console.log(this.selectedfile)
  }
  onSubmit(){

    let u = JSON.parse(sessionStorage.getItem("user"));

    this.pid = u.id;

    console.log(this.pid)

    const fd=new FormData();
    fd.append("image",this.selectedfile)
    let or = this.service.addImage(this.pid,fd)
    or.subscribe((r)=>{console.log(r)})


  }
}
