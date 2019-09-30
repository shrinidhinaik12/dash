import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  data1:any
  da: any;
  variable=[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.da=JSON.parse(localStorage.getItem("some"))
   this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(data=>{
     this.data1 = data;
   })
   setTimeout(()=>{
     this.click();
   },2000)
 }
 click()
 {
   for(var i=0;i<this.data1.length;i++)
   {
     if(this.da == this.data1[i].postId)
     {
       this.variable.push(this.data1[i])
     }
   }
   console.log(this.variable);
   }
}