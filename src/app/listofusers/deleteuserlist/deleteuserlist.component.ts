import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotographerserviceService } from 'src/app/dataservices/photographerservice.service';

@Component({
  selector: 'app-deleteuserlist',
  templateUrl: './deleteuserlist.component.html',
  styleUrls: ['./deleteuserlist.component.css']
})
export class DeleteuserlistComponent implements OnInit {
No: string;
  constructor(private route: ActivatedRoute,
    private ds: PhotographerserviceService,
    private router: Router) { }

    ngOnInit() {

      this.route.paramMap.subscribe((result) => {
  
        this.No = result.get("userId");
        console.log(this.No);
  
        let observableresult = this.ds.DeleteUserbyId(this.No);
  
        observableresult.subscribe((result) => {
  
          console.log(result);
  
          setTimeout(() => {
            this.router.navigate(['/listofusers']);
          },
            2000);
  
        })
      })
  
  
  
  
  
  
  
  
  
  
  
  
    }
  
  }


