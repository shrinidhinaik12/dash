import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photodata: any;
  constructor() { }

  ngOnInit() {
    this.photodata = JSON.parse(localStorage.getItem('photos'));
  }

}
