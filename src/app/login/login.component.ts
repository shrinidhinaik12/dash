import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.login = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
  }
  doLogin(datas) {
    const body = {
      email: datas.email,
      password: datas.password,
    };
    if (datas.email == " " || datas.password == " ") {
      console.log("Enter all the feilds");
    } else {
    return this.http.post('https://reqres.in/api/login', body).subscribe(data1 => {
      console.log('1', data1);
      this.router.navigateByUrl('dash');
    });
  }
  }
}
