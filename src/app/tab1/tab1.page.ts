import { Component } from '@angular/core';

import {StundenplanPage} from "../stundenplan/stundenplan.page";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  gotoUser(){
    this.router.navigate(["/stundenplan"], { queryParams: {}});
  }

  constructor(private  router: Router) {}
}
