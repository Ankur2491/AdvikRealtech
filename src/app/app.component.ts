import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  activeSelected: string;
  homeActive: string = "active";
  galleryActive: string;
  contactActive: string;
  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.activeSelected = message);
  }

  changeRoute(route: string) {
    if(route == 'home'){
      this.galleryActive = "";
      this.contactActive = "";
      this.homeActive = "active";
    }
    else if(route == 'gallery'){
      this.homeActive = "";
      this.contactActive = "";
      this.galleryActive = "active";
    }
    else {
      this.homeActive = "";
      this.galleryActive = "";
      this.contactActive = "active";
    }
    this.data.changeMessage(route);

  }
}
