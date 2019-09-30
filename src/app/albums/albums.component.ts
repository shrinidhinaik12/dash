import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public data1;
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe(data => {
      console.log(data);
      this.data1 = data;
    });
  }
  next(b) {
    localStorage.setItem("data", JSON.stringify(b))
    console.log("id", b);
    this.route.navigateByUrl('photos')
  }
}
