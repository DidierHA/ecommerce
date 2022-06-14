import { useState } from 'react';

import {
  createUserWithEmailPasswordForFirestore,
  crearDocumentoUsuarios,
} from './../../utils/firebase/firebase';

import {
  mostrarAlerta,
  errorAutenticacion,
} from './../../utils/sweetalert2/sweetalert2';

import Input from './../../layouts/Input/Input';
import Button from './../../layouts/Button/Button';

const FormularioRegistro = () => {
  const datosFormulario = {
    nombre: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
  };

  const [camposFormulario, setCamposFormulario] = useState(datosFormulario);
  const { nombre, correo, contrasena, confirmarContrasena } = camposFormulario;

  const inputs = [
    {
      label: 'Nombre:',
      type: 'text',
      name: 'nombre',
      value: nombre,
    },
    {
      label: 'Correo:',
      type: 'email',
      name: 'correo',
      value: correo,
    },
    {
      label: 'Contraseña:',
      type: 'password',
      name: 'contrasena',
      value: contrasena,
    },
    {
      label: 'Confirmar contraseña:',
      type: 'password',
      name: 'confirmarContrasena',
      value: confirmarContrasena,
    },
  ];

  const handleOnChange = (evento) => {
    const { name, value } = evento.target;
    setCamposFormulario({ ...camposFormulario, [name]: value });
  };

  const handleOnSubmit = async (evento) => {
    evento.preventDefault();

    if (contrasena !== confirmarContrasena) {
      errorAutenticacion('contrasena-no-coincide');
      return;
    }

    try {
      const { user } = await createUserWithEmailPasswordForFirestore(
        correo,
        contrasena
      );
      crearDocumentoUsuarios(user, { nombre: nombre });
      mostrarAlerta('OK', 'Usuario creado', 'success');
      setCamposFormulario(datosFormulario);
    } catch (error) {
      errorAutenticacion(error.code);
      console.error(error.code);
    }
  };

  return (
    <div style={{ width: '30%' }}>
      <h2 style={{ marginBottom: '30px' }}>Registrarse</h2>
      <form onSubmit={handleOnSubmit}>
        {inputs.map(({ label, type, name, value }, id) => (
          <Input
            key={id}
            label={label}
            type={type}
            onChange={handleOnChange}
            name={name}
            value={value}
            required={true}
          />
        ))}

        <div style={{ marginTop: '20px' }}>
          <Button type={'submit'} text={'Registrarse'} />
        </div>
      </form>
    </div>
  );
};

export default FormularioRegistro;
