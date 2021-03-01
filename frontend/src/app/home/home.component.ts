import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message="";
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/user', {withCredentials:true}).subscribe((res:any) => {
      //console.log(res);
      this.message= `Hola ${res.name}`;
      },
      err=>{
        //console.log(err);
        this.message='No has ingresado al sistema';
      }
      );
  }

}
