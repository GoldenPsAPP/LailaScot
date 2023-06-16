import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  Cards: any[] = new Array(4).fill({bg: "'/assets/img/placeholder.png'", title: '', url: '', subtitle: ''});
  constructor() { }

  ngOnInit(): void {

    this.Cards[0] = {
      bg: "'/assets/img/img (1).JPG'",
      title: 'Streamate',
      url: 'https://www.streamate.com/cam/MalaikaBrown',
      subtitle: 'Check out my exclusive content on Streamate.com.'
    };
    this.Cards[1] = {
      bg: "'/assets/img/img (3).JPG'",
      title: 'Streamate',
      url: 'https://www.streamate.com/cam/MalaikaBrown',
      subtitle: 'Check out my exclusive content on Streamate.com.'
    }
    this.Cards[2] = {
      bg: "'/assets/img/img (2).JPG'",
      title: 'Streamate',
      url: 'https://www.streamate.com/cam/MalaikaBrown',
      subtitle: 'Check out my exclusive content on Streamate.com.'
    }
    this.Cards[3] = {
      bg: "'/assets/img/img (4).JPG'",
      title: 'Streamate',
      url: 'https://www.streamate.com/cam/MalaikaBrown',
      subtitle: 'Check out my exclusive content on Streamate.com.'
    }

  }


}
