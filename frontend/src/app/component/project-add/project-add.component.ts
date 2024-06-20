import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../../services/project.service';
import { Project } from '../../interface/project';

@Component({
  selector: 'app-project-add',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {


  project: Project = {} as Project;

  constructor(private dataService:DataService, private http: HttpClient, private router: Router) {}
  users: any[] = [];
  selectedUser: number = 0;
  ngOnInit(): void {
      this.loadUsers();
  }
  loadUsers() {
    this.dataService.setApiUrl('http://localhost:3000/users');
    this.dataService.getItems().subscribe((data: any) => {
      this.users = data;
    });
  }
  addProject() {
    if (this.selectedUser) {
      this.project.project_to_user = this.selectedUser; // Gán selectedUser vào project_to_user
      this.dataService.setApiUrl('http://localhost:3000/projects/addproject');
      this.dataService.addItem(this.project).subscribe(
        response => {
          console.log('Project added successfully', response);
          this.router.navigate(['/project-list']); // Navigate to the project list page after adding successfully
        },
        error => {
          console.error('Error adding project', error);
        }
      );
    } else {
      console.error('No user selected');
    }
  }
}
