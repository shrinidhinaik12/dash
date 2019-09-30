import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public data1;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  display() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(data => {
      console.log('3', data);
      this.data1 = data;
    });
  }
}
