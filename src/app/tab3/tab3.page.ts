import { Component } from '@angular/core';
import { StudentModel, STUDENTS } from '../Model/studentModel';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  students: StudentModel[];
  test: string = "Meine erste lokale Variable!";


  constructor() {
    this.students = STUDENTS;
  }

}
