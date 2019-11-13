import { Component, OnInit } from '@angular/core';

import { IEmployee } from 'src/app/interfaces';

import { Subscription } from 'rxjs';
import { PayrollService } from '../payroll.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: IEmployee[] = []

  private employeeSub: Subscription;

  constructor(
    public payrollService: PayrollService,
  ) { }

  
  initContent() {

  }
  ngOnInit() {
    this.initContent()
  }

}
