import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { User } from '../../interface/user';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  register: User= {} as User;
  constructor(private http: HttpClient, private router: Router){};

  ngOnInit(): void {
    
  }
  addUser(){
    this.http.post('http://localhost:3000/auth/register',this.register)
    .subscribe(response =>{
       console.log('User add successfully',response);
       this.router.navigate(['/login']);
     },error =>{
       console.log('Error adding user',error);
 
    })
  }

}
