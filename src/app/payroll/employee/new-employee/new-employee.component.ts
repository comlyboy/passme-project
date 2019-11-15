import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PayrollService } from '../../payroll.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(
    public payrollService: PayrollService
  ) { }


  onSubmitEmployee(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.payrollService.addEmployee
      (
        form.value.inputFirstName,
        form.value.inputLastName,
        form.value.inputMiddleName,
        form.value.inputPhoneNumber,
        form.value.inputGender,
        form.value.inputDOB,
        form.value.inputCountry,
        form.value.inputAddress
      );
  }


  ngOnInit() {
  }

}
