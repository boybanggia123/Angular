import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employee = {
    name_employee : '',
    position: '',
    department: ''
  };

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    this.addEmployee();
    
  }
  addEmployee(){
    this.http.post('http://localhost:3000/employees/addemployee', this.employee)
    .subscribe(response =>{
      console.log('Employee added successfully',response);
      this.router.navigate(['/employee-list']);
    }
   , error => {
      console.log('Error occured', error);
    });
  }

}
