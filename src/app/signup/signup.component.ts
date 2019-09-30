import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
  this.signup = this.fb.group( {
    email: new FormControl(),
    password: new FormControl()
  });
  }
  ngOnInit() {
  }
  open(values) {
    console.log('1', values);
    var body = {
      email: values.email,
     password: values.password
    };
    this.http.post('https://reqres.in/api/register', body).subscribe(data => {
        console.log('2', data);
        this.router.navigateByUrl('login');
      });

  }
}
