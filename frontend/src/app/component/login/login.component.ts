import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
  })
  export class LoginComponent  {
    login = {
      email: '',
      password: ''
    };
    constructor(private authService: AuthService, private router: Router) {}
   
  
    loginUser() {
      this.authService.login(this.login);
    }
  }
