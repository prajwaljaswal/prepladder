import Swal from 'sweetalert2';
export const sweetAlertComponent = (type, message) => {
  if (type === 'success') {
    return Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 2000,
    });
  } else if (type === 'error') {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message || 'Error 500',
    });
  }
};
