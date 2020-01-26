import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotographerserviceService } from 'src/app/dataservices/photographerservice.service';

@Component({
  selector: 'app-deletephotographer',
  templateUrl: './deletephotographer.component.html',
  styleUrls: ['./deletephotographer.component.css']
})
export class DeletephotographerComponent implements OnInit {

  No: string;

  constructor(private route: ActivatedRoute,
    private ds: PhotographerserviceService,
    private router: Router) { }


  ngOnInit() {

    this.route.paramMap.subscribe((result) => {

      this.No = result.get("photographerId");
      console.log(this.No);

      let observableresult = this.ds.DeletePhotographerbyId(this.No);

      observableresult.subscribe((result) => {

        console.log(result);

        setTimeout(() => {
          this.router.navigate(['/listofphotographers']);
        },
          2000);

      })
    })












  }

}
