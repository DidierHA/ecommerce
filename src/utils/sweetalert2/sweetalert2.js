import Swal from 'sweetalert2';

export const mostrarToast = (mensaje) => {
  Swal.fire({
    text: mensaje,
    target: '.toast',
    customClass: {
      container: 'position-absolute',
    },
    toast: true,
    timer: 2000,
    position: 'bottom-right',
  });
};

export const mostrarAlerta = (titulo, descripcion, icono) => {
  Swal.fire(titulo, descripcion, icono);
};

export const errorAutenticacion = (codigo) => {
  switch (codigo) {
    case 'auth/weak-password':
      Swal.fire(
        'Error',
        'La contraseña debe tener más de 6 dígitos',
        'warning'
      );
      break;

    case 'contrasena-no-coincide':
      Swal.fire('Error', 'La contraseñas no coinciden', 'warning');
      break;

    case 'auth/user-not-found':
      Swal.fire('Error', 'El usuario no se encuentra registrado', 'error');
      break;

    default:
      Swal.fire('Error', 'Hubo un problema registrando el usuario', 'error');
      break;
  }
};
