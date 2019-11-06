import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  onDashFilter(event) {
    console.log(event)
  }

  initContent() {

  }

  ngOnInit() {
    this.initContent()
  }

}
