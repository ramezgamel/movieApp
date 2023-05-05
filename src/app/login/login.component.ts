import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AccessService } from '../access.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: string = '';

  constructor(private _AccessService: AccessService, private _Router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Z][a-zA-Z0-9]{5,}$'),
    ]),
  });

  login(loginForm: FormGroup) {
    this._AccessService.login(loginForm.value).subscribe((res) => {
      if (res.message == 'success') {
        localStorage.setItem('userToken', res.token);
        this._AccessService.currentUser();
        this._Router.navigate(['/home']);
      } else {
        Swal.fire(`${res.message}`);
      }
    });
  }

  ngOnInit(): void {}
}
