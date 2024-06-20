import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProjectComponent } from './component/project/project.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { TaskComponent } from './component/task/task.component';
import { ProjectAddComponent } from './component/project-add/project-add.component';
import { ProjectEditComponent } from './component/project-edit/project-edit.component';
import { EmployeeAddComponent } from './component/employee-add/employee-add.component';
import { EmployeeEditComponent } from './component/employee-edit/employee-edit.component';
import { TaskAddComponent } from './component/task-add/task-add.component';
import { TaskEditComponent } from './component/task-edit/task-edit.component';
import { ProjectDetailComponent } from './component/project-detail/project-detail.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeprojectComponent } from './component/homeproject/homeproject.component';
import { HttpClientModule } from '@angular/common/http';
export const routes: Routes = [
    {path: '', redirectTo:'/login', pathMatch:'full'},
    {path:'register',component: RegisterComponent},
    {path:'home', component: HomeComponent},
    {path:'homeproject', component: HomeprojectComponent},
    {path:'login',component: LoginComponent},
    {path:'project-list', component: ProjectComponent},
    {path:'project-detail/:id', component: ProjectDetailComponent},
    {path:'project-add', component: ProjectAddComponent},
    {path:'project-edit/:projectId', component: ProjectEditComponent},
    {path:'employee-list', component: EmployeeComponent},
    {path:'employee-add', component: EmployeeAddComponent},
    {path:'employee-edit', component: EmployeeEditComponent},
    {path:'task-list',component: TaskComponent},
    {path:'task-add',component: TaskAddComponent},
    {path:'task-edit',component: TaskEditComponent},
    
];
@NgModule({
    
    imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)],
    exports: [
        RouterModule,
        HttpClientModule
    ]
  })
  export class AppRoutingModule { }
