import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-matter',
  templateUrl: './register-matter.component.html',
  styleUrls: ['./register-matter.component.css']
})
export class RegisterMatterComponent implements OnInit {
  matter: any;
  constructor() { 
    this.matter = {
      title: '',
      teacher: '',
      content: '',
      school: ''
    };
  }

  ngOnInit(): void {
  }
  register() {}

}
