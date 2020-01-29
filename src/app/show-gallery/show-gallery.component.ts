import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotographerserviceService } from '../dataservices/photographerservice.service';

@Component({
  selector: 'app-show-gallery',
  templateUrl: './show-gallery.component.html',
  styleUrls: ['./show-gallery.component.css']
})
export class ShowGalleryComponent implements OnInit {

  images: File[] = [];

  pp:any;

  constructor(private route: ActivatedRoute,
    private ps: PhotographerserviceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((r) => {
      let id:any = r.get("id")
      let or = this.ps.GetImagesByPhotographer(id);
      or.subscribe((r:any) => {

         let ipl:any =  r; 

         console.log(ipl[0].image)

         for(let i=0; i<ipl.length;i++)
         {
          this.images.push(ipl[i].image)
         }
      })
    })
  }
}
