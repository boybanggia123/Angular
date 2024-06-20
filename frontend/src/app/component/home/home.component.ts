import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Project } from '../../interface/project';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from '../project/project.component';
import { EmployeeComponent } from '../employee/employee.component';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectComponent, EmployeeComponent, TaskComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userProject: Project[] = [];
  userId: number | null = null;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      console.error('User is not logged in. Redirecting to login page.');
      this.router.navigate(['/login']);
      return;
    }

    const userInfo = this.authService.getUserInfo();
    if (userInfo && userInfo.id) { // Correct property name to match payload
      this.userId = userInfo.id;
      console.log('User ID Retrieved:', this.userId);  // Debugging line
      this.fetchUserProjects();
    } else {
      console.error('User ID not found. Please log in.');
    }
  }

  fetchUserProjects(): void {
    this.http.get<Project[]>(`http://localhost:3000/project/user/${this.userId}`)
      .subscribe(
        data => {
          this.userProject = data;
          console.log(this.userProject);
        },
        error => {
          console.error('Error fetching user projects:', error);
        }
      );
  }
}
