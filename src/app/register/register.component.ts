import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccessService } from '../access.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error:string = '';
  constructor(private _AccessService:AccessService, private _Router:Router) { }

  registerForm = new FormGroup({
    first_name: new FormControl((null),[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl((null),[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl((null),[Validators.required, Validators.email]),
    age: new FormControl((null), [Validators.required, Validators.min(16)]),
    password: new FormControl((null), [Validators.required, Validators.pattern("^[A-Z][a-zA-Z0-9]{5,}$")]),
  })
  
  register(registerForm:any){
    this._AccessService.register(registerForm.value).subscribe((response) => {
      if (response.message == 'success'){
        this._Router.navigate(['/login'])
      }else {
        this.error = response.errors.email.message
      }
    })
  }
  

  ngOnInit(): void {
  }

}
