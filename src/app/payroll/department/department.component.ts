import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PayrollService } from '../payroll.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
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
