import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css'],
})
export class RegisterCourseComponent implements OnInit {
  course: any;
  constructor() {
    this.course = {
      title: '',
      matter: '',
      quantity: '',
      date: '',
      dateFin: ''
    };
  }

  ngOnInit(): void {}
  register() {}
}
