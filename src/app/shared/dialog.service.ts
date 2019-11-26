import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { EmployeeService } from '../payroll/employee/employee.service';
import { LoanService } from '../payroll/loan/loan.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public employeeService: EmployeeService,
    public loanService: LoanService

  ) { }

  confirmDeleteDialog(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger bg-danger',
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.employeeService.deleteEmployee(id)
          .subscribe(() => {
            this.employeeService.getEmployee()
            this.success()
          });
      }
    })
  }

  // ++++++++++++++++++++++
  comfirmLoanDelete(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger bg-danger',
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.loanService.deleteLoan(id)
          .subscribe(() => {
            this.loanService.getLoan()
            this.success()
          });
      }
    })
  }




  success() {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 5000,
      grow: 'column'
    })

    toast.fire({
      icon: 'success',
      title: "Success!!!"
    })

  }

}