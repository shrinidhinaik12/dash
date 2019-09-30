import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  add: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.add = this.fb.group({
      userId: new FormControl(),
      title: new FormControl(),
      completed: new FormControl()
    });
  }

  ngOnInit() {
  }
  doAdd(values) {
    const body = {
      userId: values.userId,
      title: values.title,
      completed: values.completed
    };
    this.http.post('https://jsonplaceholder.typicode.com/todos', body).subscribe(data => {
      console.log('4', data);
    });
  }
}
