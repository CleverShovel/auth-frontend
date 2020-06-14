import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  email = '';
  password = '';
  first_name = '';
  last_name = '';
  phone = '';

  constructor() { }

  

  ngOnInit(): void {
  }

}
