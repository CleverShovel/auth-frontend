import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  Submit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    alert(JSON.stringify(this.registerForm.value, null, 4));
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[А-ЯЁ][а-яё]* [А-ЯЁ][а-яё]*$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  get f() { return this.registerForm.controls; }
}
