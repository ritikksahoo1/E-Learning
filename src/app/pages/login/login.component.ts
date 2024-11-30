import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ApiService, LoginDetails } from '../../shared/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.loginForm = this.fb.group({
      role: ['student', Validators.required], // Default value set to 'student'
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      const payload: LoginDetails = {
        userId: this.loginForm.value.email,
        password: this.loginForm.value.password,
        role: this.loginForm.value.role
      };
      this.apiService.login(payload).subscribe((response: any) => {
        console.log(response);
        this.apiService.token.set(response.token)
      }, err => { console.log("Error occurred while fetching", err) });
    } else {
      console.log('Form is invalid');
    }
  }
}
