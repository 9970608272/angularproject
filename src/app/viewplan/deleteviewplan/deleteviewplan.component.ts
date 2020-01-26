import { Component, OnInit } from '@angular/core';
import { ViewplanserviceService } from 'src/app/dataservices/viewplanservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteviewplan',
  templateUrl: './deleteviewplan.component.html',
  styleUrls: ['./deleteviewplan.component.css']
})
export class DeleteviewplanComponent implements OnInit {

  No: string;

  constructor(private route: ActivatedRoute,
    private ds: ViewplanserviceService,
    private router: Router) { }


  ngOnInit() {

    this.route.paramMap.subscribe((result) => {

      this.No = result.get("planId");
      console.log(this.No);

      let observableresult = this.ds.DeletePlanbyId(this.No);

      observableresult.subscribe((result) => {

        console.log(result);

        setTimeout(() => {
          this.router.navigate(['/viewplan']);
        },
          2000);

      })
    })












  }
}
