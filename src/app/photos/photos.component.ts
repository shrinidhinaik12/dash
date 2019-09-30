import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  nxt: any;
  photos: any;
  data1 = [];
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
    this.nxt = JSON.parse(localStorage.getItem('data'));
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(data=>{
      this.photos = data;
    })
    setTimeout(() => {
      this.p12();
    }, 2000);
  }
  p12()
  {
    for (var i = 0; i < this.photos.length; i++) {
      if (this.nxt === this.photos[i].albumId) {
        this.data1.push(this.photos[i]);
      }
    }
    console.log(this.data1);
   }
   pic(pic) {
    localStorage.setItem('photos', JSON.stringify(pic));
    this.route.navigateByUrl('photo');
   }
 }

