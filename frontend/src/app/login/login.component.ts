import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: [''],
    password:['']
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    //console.log(this.profileForm.getRawValue());
    this.http.post('http://127.0.0.1:8000/api/login', this.loginForm.getRawValue(), {withCredentials:true})
    .subscribe(() => 
      //console.log(res);
      this.router.navigate(['/'])
  );
  }

}
