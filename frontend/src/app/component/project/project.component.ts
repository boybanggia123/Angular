import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Project } from '../../interface/project';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { User } from '../../interface/user';



@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterLink,RouterOutlet,RouterModule,ProjectDetailComponent],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'] // Sử dụng 'styleUrls' thay vì 'styleUrl'
})
export class ProjectComponent implements OnInit {

  userNames: {[key:number]:string}={};
  listProjects: Project[] = [];
  listUsers : User[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProjects();
    this.fetchUserNames();
  }
  fetchUserNames(): void {
    this.http.get<User[]>('http://localhost:3000/users')
      .subscribe(
        data => {
          // Lưu trữ tên người dùng dựa trên ID
          data.forEach((user: { id: number; name_user: string }) => {
            this.userNames[user.id] = user.name_user;
          });
        },
        error => {
          console.error('Error fetching users:', error);
        }
      );
  }

  fetchProjects(): void {
    this.http.get<Project[]>('http://localhost:3000/projects')
      .subscribe(
        data => {
          this.listProjects = data;
        },
        error => {
          console.error('Error fetching projects:', error);
        }
      );
  }
  deleteProject(projectId: number) {
    if (confirm('Bạn có chắc chắn muốn xóa dự án này?')) {
      this.http.delete(`http://localhost:3000/projects/delete/${projectId}`)
        .subscribe(() => {
          console.log('Project deleted successfully');
          this.fetchProjects(); // Load lại danh sách dự án sau khi xóa thành công
        }, error => {
          console.error('Error deleting project:', error);
        });
    }
}

  
}
