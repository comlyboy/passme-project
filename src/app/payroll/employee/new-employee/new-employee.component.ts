import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PayrollService } from '../../payroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  viewMode = "employee"
  private genderSub: Subscription;
  genders: any[];
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
        form.value.inputAddress,

        form.value.inputNokName,
        form.value.inputNokPhoneNumber,
        form.value.inputNokEmail
      );

  }


  // onSubmitNOK(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }

  //   this.payrollService.addEmployeeNok
  //     (
  //       form.value.inputNokName,
  //       form.value.inputNokPhoneNumber,
  //       form.value.inputNokEmail,
  //     );
  // }

  initContent() {
    this.genderSub = this.payrollService.getAllGendersUpdateListener()
      .subscribe(genderData => {
        this.genders = genderData.allGenders
      })
  }
  
  ngOnInit() {
    this.initContent();
    this.payrollService.getGender()
  }

}
