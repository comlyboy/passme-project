import { Component, OnInit } from '@angular/core';

import { IEmployee } from 'src/app/interfaces';

import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/shared/dialog.service';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: IEmployee[] = []

  private employeeSub: Subscription;

  constructor(
    public employeeService: EmployeeService,
    public dialogService: DialogService,
  ) { }


  onDeleteDialog(id: number) {
    this.dialogService.confirmDeleteDialog(id)
  }



  initContent() {
    this.employeeService.getEmployee()
    this.employeeSub = this.employeeService.getAllEmployeesUpdateListener()
      .subscribe(employeeData => {
        this.employees = employeeData.allEmployees
      })
  }


  ngOnInit() {
    this.initContent()
  }


}
