import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css'],
})
export class RegisterTeacherComponent implements OnInit {
  teacher: any;
  constructor(
    private _toast: ToastService,
    private _personService: PersonService
  ) {
    this.teacher = {};
  }
  ngOnInit(): void {}
  registrar() {
    if(!this.teacher.name || !this.teacher.email || !this.teacher.password) {
      this._toast.message = 'Datos incompletos';
      return this._toast.openSnackBarError();
    }
    this._personService.create(this.teacher).subscribe(
      (response: any) => {
        console.log('Profesor creado', response);
        this._toast.message = 'Profesor registrado con exito';
        this._toast.openSnackBarSuccesfull();
      },
      (error: any) => {
        console.log('Error al crear', error);
        this._toast.message = 'Error al crear el profesor';
        this._toast.openSnackBarError();
        
      }
    );
  }
}
