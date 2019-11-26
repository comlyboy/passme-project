import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/interfaces';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee/employee.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { LoanService } from './loan.service';
import { NgForm } from '@angular/forms';

LoanService
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  loans: any[] = []

  employees: IEmployee[] = []

  private employeeSub: Subscription;
  private loanSub: Subscription;
  loanMode = "list";

  constructor(
    public employeeService: EmployeeService,
    public dialogService: DialogService,
    public loanService: LoanService
  ) { }

  onSubmitLoan(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.loanService.addLoan
      (
        form.value.inputLoanType,
        form.value.inputStartDate,
        form.value.inputEndDate,
        form.value.inputAmount,
        form.value.inputEmployee
      )
    this.loanMode = "list"
  }


  onDeleteDialog(id: number) {
    this.dialogService.comfirmLoanDelete(id)
  }


  initContent() {
    this.employeeService.getEmployee()
    this.employeeSub = this.employeeService.getAllEmployeesUpdateListener()
      .subscribe(employeeData => {
        console.log(employeeData)
        this.employees = employeeData.allEmployees
      })

    this.loanService.getLoan()
    this.loanSub = this.loanService.getAllLoanUpdateListener()
      .subscribe(loanData => {
        console.log(loanData)
        this.loans = loanData.allLoan
      })
  }


  ngOnInit() {
    this.initContent()
  }

}
