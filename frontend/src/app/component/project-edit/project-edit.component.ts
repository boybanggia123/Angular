import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Project } from '../../interface/project';
import { User } from '../../interface/user';



@Component({
  selector: 'app-project-edit',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './project-edit.component.html',
  styleUrl: './project-edit.component.css'
})
export class ProjectEditComponent implements OnInit {
  projectId : string='';
  project: Project = {} as Project;
  users : User []= [];
  constructor(private http:HttpClient, private dataService:ActivatedRoute , private router: Router){
  }

  ngOnInit(): void {
    this.projectId = this.dataService.snapshot.paramMap.get('projectId')!;
    this.getProject();
    this.loadUsers();
  }
  loadUsers(): void {
    this.http.get<User[]>('http://localhost:3000/users')
      .subscribe(data => {
        this.users = data;
      }, error => {
        console.error('Error fetching users', error);
      });
  }
  getProject(){
    this.http.get(`http://localhost:3000/projects/${this.projectId}` )
    .subscribe((data:any)=>{
      this.project = data;
    }, error=>{
      console.error('Error fetching project',error);
      
    }
  );
    
  }
  updateProject() {
    this.http.post(`http://localhost:3000/projects/editproject/${this.projectId}`, this.project)
      .subscribe(response => {
        console.log('Project updated successfully', response);
        this.router.navigate(['project-list']); // Navigate to the project list page after editing successfully
      }, error => {
        console.error('Error updating project', error);
      });
  }
}
