import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  Images: any[] = new Array(4).fill({title: "/assets/img/about.png"});
  constructor() { }


  ngOnInit(): void {
    this.Images[0] = {
      title: "/assets/img/about.png"
    };
    this.Images[1] = {
      title: "/assets/img/about.png"
    }
    this.Images[2] = {
      title: "/assets/img/about.png"
    }
    this.Images[3] = {
      title: "/assets/img/about.png"
    }

  }
}
