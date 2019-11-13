import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }



  success(message) {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 5000,
      grow: 'column'
    })

    toast.fire({
      icon: 'success',
      title: message
    })

    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: message,
    //   showConfirmButton: false,
    //   timer: 1500
    // })

    // this.config.panelClass = ['notification', 'success'];
    // this.snackBar.open(message, '', this.config);
  }

  notAllowed(message) {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 5000,
      grow: 'column'
    })

    toast.fire({
      icon: 'error',
      title: message
    })

    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: message,
    //   showConfirmButton: false,
    //   timer: 1500
    // })

    // this.config.panelClass = ['notification', 'success'];
    // this.snackBar.open(message, '', this.config);
  }


  error(message) {
    Swal.fire({
      icon: 'error',
      title: message,
      text: "",
      timer: 7000

    })

  }

  confirmDialog() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
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
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}
