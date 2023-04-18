import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StudentModel, STUDENTS} from "../Model/studentModel";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {


  students:StudentModel[];


  constructor(private route:ActivatedRoute) {
    this.students=STUDENTS;
    let id:any=this.route.snapshot.paramMap.get("id");

  }

  ionViewDidEnter() {
    const param = this.route.snapshot.queryParamMap.get("id");
    console.log("ID des Studenten: ",param) ;
  }

  ngOnInit() {
  }

}
