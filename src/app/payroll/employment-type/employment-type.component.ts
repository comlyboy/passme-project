import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../payroll.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employment-type',
  templateUrl: './employment-type.component.html',
  styleUrls: ['./employment-type.component.css']
})
export class EmploymentTypeComponent implements OnInit {

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
