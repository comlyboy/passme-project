import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PayrollService } from '../../payroll.service';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  viewMode = "add"
  private genderSub: Subscription;
  genders: any[];
  constructor(
    public employeeService: EmployeeService
  ) { }


  onSubmitGender(form: NgForm) {
    if (form.invalid) {
      return;
    }
    form.value.inputGender
    console.log(form.value.inputGender)
  }
  onSubmitEmployee(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.employeeService.addEmployee
      (
        form.value.inputFirstName,
        form.value.inputLastName,
        form.value.inputMiddleName,
        form.value.inputPhoneNumber,
        form.value.inputGender,
        form.value.inputDOB,
        form.value.inputCountry,
        form.value.inputAddress,

        form.value.inputNokName,
        form.value.inputNokPhoneNumber,
        form.value.inputNokEmail
      );

  }

  initContent() {
    this.employeeService.getGender()
    this.genderSub = this.employeeService.getAllGenderUpdateListener()
      .subscribe(genderData => {
        console.log(genderData)
        this.genders = genderData.allGenders
      })
  }

  ngOnInit() {
    this.initContent();
  }

}
