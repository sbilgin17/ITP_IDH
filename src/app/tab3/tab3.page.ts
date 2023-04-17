import { Component } from '@angular/core';
import { StudentModel, STUDENTS } from '../Model/studentModel';
import {StudentDetailPage} from "../student-detail/student-detail.page";
import {Router} from "@angular/router";


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


  constructor(private router: Router) {
    this.students = STUDENTS;
  }

  gotoUser(id: number){
    this.router.navigate(["/student-detail"], { queryParams: { id }});
  }

}
