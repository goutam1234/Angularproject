import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: [],
    dots:false,
    responsive: {
      0: {
       items: 4
     },
      480: {
       items: 4
     },
      940: {
       items: 4
     }
    },
   nav: false
  };

  constructor() { };

  ngOnInit(): void {
  };

}
