import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StudentModel, STUDENTS} from "../Model/studentModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {


  students:StudentModel[];
  student: StudentModel;


  constructor(private route:ActivatedRoute) {
    this.students=STUDENTS;
    let id:any = this.route.snapshot.queryParamMap.get('id');
    console.log("ID des Studenten: ", id);
    this.student=this.students[id-1];

  }

  ionViewDidEnter() {
    //const param = this.route.snapshot.queryParamMap.get("id");
    //console.log("ID des Studenten: ",param) ;
  }




  ngOnInit() {

  }

}
