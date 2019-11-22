import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../payroll.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-deduction',
  templateUrl: './employee-deduction.component.html',
  styleUrls: ['./employee-deduction.component.css']
})
export class EmployeeDeductionComponent implements OnInit {
  viewMode = "main"

  constructor(
    public payrollService: PayrollService
  ) { }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // this.payrollService.addDepartment
    //   (
    //     form.value.inputName,
    //     form.value.inputDescription
    //   )
  }

  ngOnInit() {
  }

}
