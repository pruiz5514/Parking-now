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

export function deleteUserAlert(
  deleteUserById: (cookieToken: string, id: string) => void,
  cookieToken: string,
  id: string,
  fetchUsers: () => Promise<void>
): void {
  Swal.fire({
    title: "¿Desea borrar el usuario?",
    text: "No podrá revertir esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Eliminado!",
        text: "El usuario ha sido eliminado.",
        icon: "success"
      });
      deleteUserById(cookieToken, id);
      fetchUsers();
    }
  });
}