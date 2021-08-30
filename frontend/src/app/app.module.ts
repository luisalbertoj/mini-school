import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterCourseComponent } from './pages/register-course/register-course.component';
import { RegisterTeacherComponent } from './pages/register-teacher/register-teacher.component';
import { RegisterStudentComponent } from './pages/register-student/register-student.component';
import { RegisterMatterComponent } from './pages/register-matter/register-matter.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from './services/toast.service';
import { PersonService } from './services/person.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterCourseComponent,
    RegisterTeacherComponent,
    RegisterStudentComponent,
    RegisterMatterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    ToastService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
