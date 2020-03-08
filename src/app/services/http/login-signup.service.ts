import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class LoginSignUpService {
  constructor(private http: HttpClient){}

  postLogin(credentials) {
    return this.http.post('http://localhost:3000/login', credentials);
  }
  postSignUp(signupData)  {
      return this.http.post('http://localhost:3000/signup', signupData);
}
}