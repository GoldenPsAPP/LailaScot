import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }


  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  buttonCollapsed() {
    if (this.collapsed == false) {
      this.collapsed = !this.collapsed;
    }

  }

}
