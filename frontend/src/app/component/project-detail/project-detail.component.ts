import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Project } from '../../interface/project';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchProject();
  }

  fetchProject(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.http.get<Project>(`http://localhost:3000/projects/project-detail/${projectId}`)
        .subscribe(
          data => {
            this.project = data;
          },
          error => {
            console.error('Error fetching project details:', error);
          }
        );
    }
  }
}
