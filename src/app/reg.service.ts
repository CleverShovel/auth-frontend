import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  uri = '/api';
  token;

  constructor(private http: HttpClient, private router: Router) { }

  register(name: string, email: string, phoneNumber: string, password: string) {
    this.http.post(this.uri + '/register', {
      name: name, email: email, phoneNumber: phoneNumber, password: password
    })
      .subscribe((resp: any) => {
        alert("Registration is succesful!")
        // this.router.navigate(['profile']);
        // localStorage.setItem('auth_token', resp.token);

      });
  }
}
