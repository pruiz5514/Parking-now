import Swal from 'sweetalert2';

export function errorAlert(text: string) {
  Swal.fire({
    title: 'Error!',
    text: text,
    icon: 'error',
    confirmButtonText: 'Ok',
    confirmButtonColor: "#F66B0E"
  })
}

export function successAlert(text: string) {
  Swal.fire({
    title: 'Exito!',
    text: text,
    icon: 'success',
    confirmButtonText: 'Ok',
    confirmButtonColor: "#F66B0E"
  })
}

export function confirmAlert(title: string, onConfirm: () => void) {
  Swal.fire({
    title: title,
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#F66B0E",
    cancelButtonColor: "#112B3C"
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm()
    }
  });
}