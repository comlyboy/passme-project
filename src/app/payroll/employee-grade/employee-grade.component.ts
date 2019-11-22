import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../payroll.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-grade',
  templateUrl: './employee-grade.component.html',
  styleUrls: ['./employee-grade.component.css']
})
export class EmployeeGradeComponent implements OnInit {

  viewMode = "main"
  constructor(
    public payrollService: PayrollService
  ) { }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // this.payrollService.addDepartment
    // (
    //   form.value.inputName,
    //   form.value.inputDescription
    // )
  }
  ngOnInit() {
  }

}
