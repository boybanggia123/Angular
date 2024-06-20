import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../interface/task';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 listTasks : Tasks[] = [];
 constructor(private http:HttpClient){};
  ngOnInit(): void {
    this.fetchTasks();
  }
  fetchTasks():void{
    this.http.get<Tasks[]>('http://localhost:3000/tasks')
    .subscribe(data =>
      {
        this.listTasks = data;
        console.log(this.listTasks);
      },
      error => {
        console.log("Tasks ko hoạt động:",error);
      }
    )
  }
}
