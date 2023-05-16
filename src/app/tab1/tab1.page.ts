import { Component } from '@angular/core';


import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  handleRefresh({event}: { event: any }) {
    setTimeout(() => {

      event.target.complete();
    }, 2000);
  }

  gotoUserr1(){
    this.router.navigate(["/tabs/tab2"], { queryParams: {}});
  }

  gotoUser(){
    this.router.navigate(["/stundenplan"], { queryParams: {}});
  }
  gotoUserr(){
    this.router.navigate(["/tabs/tab3"], { queryParams: {}});
  }

  constructor(private  router: Router) {}
}
