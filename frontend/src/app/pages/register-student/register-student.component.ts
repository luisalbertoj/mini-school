import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css'],
})
export class RegisterStudentComponent implements OnInit {
  estudiante: any;
  constructor() {
    this.estudiante = {
      nombres: '',
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  registrar() {}
}
