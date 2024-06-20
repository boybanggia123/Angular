import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interface/employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit  {
  listEmployees: Employee [] = [];

  constructor(private http:HttpClient){}
ngOnInit():void{
  this.fetchEmployees();
}
  fetchEmployees():void{
    this.http.get<Employee[]>('http://localhost:3000/employees')
   .subscribe(
    data => {
      this.listEmployees = data;
      console.log(this.listEmployees);
    },
    error => {
      console.log(error);
    }
   );
  }

}
