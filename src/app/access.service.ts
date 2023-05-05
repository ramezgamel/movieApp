import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AccessService {
  baseURL = environment.url;
  currentUserInfo = new BehaviorSubject<any>(null);
  constructor(private _HttpClient: HttpClient, private _Router:Router) {}

  getUserInfo() {
    let token: any = localStorage.getItem('userToken');
    return jwtDecode(token);
  }

  register(formData: any): Observable<any> {
    return this._HttpClient.post(`${this.baseURL}signup`, formData);
  }

  login(formData: any): Observable<any> {
    return this._HttpClient.post(`${this.baseURL}signin`, formData);
  }
  
  currentUser() {
    let token: any = localStorage.getItem('userToken');
    this.currentUserInfo.next(jwtDecode(token));
  }

  logout() {
    this.currentUserInfo.next(null);
    localStorage.removeItem('userToken');
    this._Router.navigate(['/login']);
  };
  
}
