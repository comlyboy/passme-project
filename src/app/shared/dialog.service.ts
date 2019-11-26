import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { EmployeeService } from '../payroll/employee/employee.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public employeeService: EmployeeService,

  ) { }

  confirmDeleteDialog(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success bg-green',
        cancelButton: 'btn btn-danger'
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
            this.bigSuccess("Employee has been deleted!!!")
          });
      }
    })
  }




  private bigSuccess(message) {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: message,
      timer: 3000,
      showConfirmButton: false,
    })
  }
}
