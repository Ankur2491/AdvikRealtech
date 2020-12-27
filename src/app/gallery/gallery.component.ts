import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  activeSelected: string;
  constructor(private data: DataService) { }
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.activeSelected = message);
  }
}
