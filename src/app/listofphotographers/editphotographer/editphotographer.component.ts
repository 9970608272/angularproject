import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotographerserviceService } from 'src/app/dataservices/photographerservice.service';
import { Photographer } from 'src/app/model/photographer';

@Component({
  selector: 'app-editphotographer',
  templateUrl: './editphotographer.component.html',
  styleUrls: ['./editphotographer.component.css']
})
export class EditphotographerComponent implements OnInit {
  ph: Photographer;
  constructor(private route: ActivatedRoute,
    private ds: PhotographerserviceService,
    private router: Router

) {

  this.route.paramMap.subscribe((result) => {

    let No = result.get("photographerId");
    console.log(No);

    let observableresult = this.ds.GetPhotographerById(No);

    observableresult.subscribe((result:any) => {

      this.ph = result;

      console.log(this.ph);
    })
  })






 }
  ngOnInit() {
    
  }

    UpdatePhotographer() {
      let observableresult = this.ds.UpdatePhotographer(this.ph);
  
      observableresult.subscribe((result) => {
  
       console.log(result);
  
        this.router.navigate(['/listofphotographers']);
      })
    }
  }
  


