import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  profileForm = this.fb.group({
    name: [''],
    email: [''],
    password:['']
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    //console.log(this.profileForm.getRawValue());
    this.http.post('http://127.0.0.1:8000/api/register', this.profileForm.getRawValue())
    .subscribe(res => {
      console.log(res);
  });
  }
}

/*
onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}
*/ 

/*
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
