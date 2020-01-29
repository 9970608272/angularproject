import { Component, OnInit } from '@angular/core';
import { Photographer } from 'src/app/model/photographer';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotographerserviceService } from 'src/app/dataservices/photographerservice.service';

@Component({
  selector: 'app-editpersonalinfo',
  templateUrl: './editpersonalinfo.component.html',
  styleUrls: ['./editpersonalinfo.component.css']
})
export class EditpersonalinfoComponent implements OnInit {
  ph: Photographer;
  constructor(private route: ActivatedRoute,
    private ds: PhotographerserviceService,
    private router: Router)
    {

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
      
            this.router.navigate(['/personalinfo']);
          })
        }
      }
      
    