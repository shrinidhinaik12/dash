import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public data1: any;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      console.log('2', data);
      this.data1 = data;
    });
  }
  view(data) {
    localStorage.setItem('some', JSON.stringify(data));
    console.log(data);
    this.router.navigateByUrl('comments');
  }
}
