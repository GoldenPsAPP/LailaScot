import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {


  videosArray: any[] = new Array(4).fill({url: ''});
  constructor() { }

  ngOnInit(): void {

    this. videosArray[0] = {
      url: '/assets/Videos/videos (1).mp4',
    };
    this. videosArray[1] = {
      url: '/assets/Videos/videos (2).mp4',
    }
    this. videosArray[2] = {
      url: '/assets/Videos/videos (3).mp4',
    }
    this. videosArray[3] = {
      url: '/assets/Videos/videos (4).mp4',
    }

  }


}
