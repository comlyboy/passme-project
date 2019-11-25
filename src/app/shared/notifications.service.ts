import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import cheers from 'cheers-alert';
import 'cheers-alert/src/cheers-alert.css'; //load style
import 'font-awesome/css/font-awesome.min.css'; //load font-awesome

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }



  topRight(message) {
    const toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      grow: 'column'
    })

    toast.fire({
      icon: 'success',
      title: message
    })
  }

  bigSuccess(message) {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: message,
      timer: 3000,
      showConfirmButton: false,
    })
  }

  full() {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      timer: 3000,
      showConfirmButton: false,
    })
  }

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


  // async newBusiness(value) {
  //   const { value: formValues } = await Swal.fire({
  //     title: 'Multiple inputs',
  //     html:
  //       '<input id="swal-input1" class="swal2-input">' +
  //       '<input id="swal-input2" class="swal2-input">',
  //     focusConfirm: false,
  //     preConfirm: () => {
  //       return [
  //         document.getElementById('swal-input1').value,
  //         document.getElementById('swal-input2').value
  //       ]
  //     }
  //   })

  //   // if (formValues) {
  //   //   Swal.fire(JSON.stringify(formValues))
  //   // }
  // }

  notify(message) {
    cheers.success({
      title: 'Warning',
      message: message,
      alert: 'slideleft',
      icon: 'fa-tick',
      duration: 5,
      callback: () => { }
    });
  }

}
