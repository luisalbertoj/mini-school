import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css'],
})
export class RegisterTeacherComponent implements OnInit {
  teacher: any;
  constructor() {
    this.teacher = {
      name: '',
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {}
  registrar() {}
}
