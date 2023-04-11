import { Component } from '@angular/core';
import { StudentModel, STUDENTS } from '../Model/studentModel';
import {StudentDetailPage} from "../student-detail/student-detail.page";


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
//hallo
export class Tab3Page {


  Component = StudentDetailPage;
  students: StudentModel[];
  test: string = "Meine erste lokale Variable!";


  constructor() {
    this.students = STUDENTS;
  }

}
