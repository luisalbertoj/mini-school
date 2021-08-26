import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterCourseComponent } from './pages/register-course/register-course.component';
import { RegisterMatterComponent } from './pages/register-matter/register-matter.component';
import { RegisterStudentComponent } from './pages/register-student/register-student.component';
import { RegisterTeacherComponent } from './pages/register-teacher/register-teacher.component';

const routes: Routes = [
  {path: '', component: RegisterStudentComponent},
  {path: 'register-teacher',  component: RegisterTeacherComponent},
  {path: 'register-student', component: RegisterStudentComponent},
  {path: 'register-course', component: RegisterCourseComponent},
  {path: 'register-matter', component: RegisterMatterComponent},
  {path: '*', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
